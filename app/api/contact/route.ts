import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import { ContactNotificationEmail } from '@/components/emails/contact-notification';
import { ContactConfirmationEmail } from '@/components/emails/contact-confirmation';

const SITE_OWNER_EMAIL =
  process.env.SITE_OWNER_EMAIL || 'info@apexsurveying.net';
const FROM_EMAIL =
  process.env.FROM_EMAIL ||
  'Apex Consulting & Surveying <noreply@apexsurveying.net>';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const firstError = Object.values(errors).flat()[0] || 'Invalid form data';
      return NextResponse.json(
        { error: firstError, fieldErrors: errors },
        { status: 400 }
      );
    }

    const { name, email, phone, organization, projectType, message } = result.data;

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending emails...');
    console.log('FROM_EMAIL:', FROM_EMAIL);
    console.log('SITE_OWNER_EMAIL:', SITE_OWNER_EMAIL);
    console.log('Submitter email:', email);

    // Send confirmation email to the person who submitted the form first
    const confirmationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting Apex Consulting & Surveying',
      react: ContactConfirmationEmail({ name }),
    });

    if (confirmationResult.error) {
      console.error(
        'Failed to send confirmation email:',
        confirmationResult.error
      );
    } else {
      console.log(
        'Confirmation email sent:',
        confirmationResult.data
      );
    }

    // Send notification email to site owner
    const notificationResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: SITE_OWNER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      react: ContactNotificationEmail({
        name,
        email,
        phone,
        organization,
        projectType,
        message,
      }),
    });

    if (notificationResult.error) {
      console.error(
        'Failed to send notification email:',
        notificationResult.error
      );
      // Log the full error for debugging
      console.error(
        'Notification error details:',
        JSON.stringify(notificationResult.error, null, 2)
      );
    } else {
      console.log(
        'Notification email sent:',
        notificationResult.data
      );
    }

    // Return success if at least one email was sent
    const confirmationSent = !confirmationResult.error;
    const notificationSent = !notificationResult.error;

    if (!confirmationSent && !notificationSent) {
      return NextResponse.json(
        { error: 'Failed to send emails' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Emails sent successfully',
        confirmationSent,
        notificationSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
