'use client';

import { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import Container from '@/components/shared/container';
import {
  contactFormSchema,
  type ContactFormData,
} from '@/lib/validations/contact';

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(
    new Set()
  );

  function validateField(name: keyof ContactFormData, value: string) {
    // Get the field schema from the contact form schema
    const fieldSchema = contactFormSchema.shape[name];

    // Validate the field - Zod schema will handle trimming and empty strings
    const result = fieldSchema.safeParse(value);

    if (!result.success) {
      const error =
        result.error.issues[0]?.message || 'Invalid input';
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
      return false;
    }

    // Clear error for this field if validation passes
    setFieldErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
    return true;
  }

  function handleBlur(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setTouchedFields((prev) => new Set(prev).add(name));

    if (name in contactFormSchema.shape) {
      validateField(name as keyof ContactFormData, value);
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    // Only validate on change if the field has been touched (blurred at least once)
    // This prevents showing errors while the user is still typing
    if (touchedFields.has(name) && name in contactFormSchema.shape) {
      validateField(name as keyof ContactFormData, value);
    }
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const data = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || '',
      organization: (formData.get('organization') as string) || '',
      projectType: (formData.get('projectType') as string) || '',
      message: (formData.get('message') as string) || '',
    };

    // Mark all fields as touched so errors will show
    const allFieldNames = [
      'name',
      'email',
      'phone',
      'organization',
      'projectType',
      'message',
    ];
    setTouchedFields(new Set(allFieldNames));

    // Validate all fields individually first to show all errors
    let hasErrors = false;
    const errors: FieldErrors = {};

    // Validate each field
    (Object.keys(data) as Array<keyof ContactFormData>).forEach(
      (fieldName) => {
        const fieldSchema = contactFormSchema.shape[fieldName];
        const value = data[fieldName];

        const result = fieldSchema.safeParse(value);
        if (!result.success) {
          hasErrors = true;
          const error =
            result.error.issues[0]?.message || 'Invalid input';
          errors[fieldName] = error;
        }
      }
    );

    // Also do full schema validation to catch any cross-field issues
    const fullResult = contactFormSchema.safeParse(data);
    if (!fullResult.success) {
      hasErrors = true;
      fullResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!errors[field]) {
          errors[field] = issue.message;
        }
      });
    }

    if (hasErrors) {
      setFieldErrors(errors);
      // Scroll to first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const errorElement = formRef.current?.querySelector(
          `[name="${firstErrorField}"]`
        ) as HTMLElement;
        errorElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        errorElement?.focus();
      }
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.error || 'Failed to send message'
        );
      }

      setSubmitStatus('success');
      formRef.current?.reset();
      setTouchedFields(new Set());
      setFieldErrors({});
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <Container className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
        {/* Form */}
        <div className="rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-6 md:p-8 lg:p-10 space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-900">
              Tell us about your project
            </h2>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              Share a few details and we&apos;ll follow up with the
              right next steps, whether you&apos;re early in planning
              or ready for construction.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name" isRequired>
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={fieldErrors.name ? 'border-red-500' : ''}
                />
                {fieldErrors.name && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.name}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" isRequired>
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={
                    fieldErrors.email ? 'border-red-500' : ''
                  }
                />
                {fieldErrors.email && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="organization">Organization</Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="City of Fort Wayne, INDOT, developer, etc."
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={
                    fieldErrors.organization ? 'border-red-500' : ''
                  }
                />
                {fieldErrors.organization && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.organization}
                  </p>
                )}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  autoComplete="tel"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={
                    fieldErrors.phone ? 'border-red-500' : ''
                  }
                />
                {fieldErrors.phone && (
                  <p className="text-xs text-red-600">
                    {fieldErrors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="projectType">
                Project type or location
              </Label>
              <Input
                id="projectType"
                name="projectType"
                placeholder="Roadway, trail, site development, bridge, etc."
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  fieldErrors.projectType ? 'border-red-500' : ''
                }
              />
              {fieldErrors.projectType && (
                <p className="text-xs text-red-600">
                  {fieldErrors.projectType}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message" isRequired>
                How can APEX help?
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Share a short description of your project, anticipated timeline, and any known constraints."
                onBlur={handleBlur}
                onChange={handleChange}
                className={
                  fieldErrors.message ? 'border-red-500' : ''
                }
              />
              {fieldErrors.message && (
                <p className="text-xs text-red-600">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-primary/90 transition-colors">
                {isSubmitting ? (
                  <>
                    <Icon
                      name="LoaderCircle"
                      className="animate-spin"
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit inquiry
                    <Icon name="ArrowRight" />
                  </>
                )}
              </Button>

              <p className="text-xs md:text-sm text-zinc-500 max-w-md">
                By submitting, you agree that APEX may contact you
                about this inquiry. We typically respond within 2–4
                business days.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs md:text-sm text-emerald-900 flex items-center gap-2">
                <Icon name="CircleCheck" className="h-4 w-4" />
                <span>
                  Thank you — your message has been sent. We&apos;ll
                  be in touch soon.
                </span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs md:text-sm text-red-900 flex items-center gap-2">
                <Icon name="CircleX" className="h-4 w-4" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        </div>

        {/* Contact details */}
        <div className="space-y-6 text-sm md:text-base text-zinc-700">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-zinc-900">
              Contact details
            </h2>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              Prefer a direct conversation? Reach out to our office
              and we&apos;ll connect you with the right team members
              for your project.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Phone
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                (260) 755-5993
              </p>
              <p className="mt-0.5 text-sm text-zinc-700">
                Indianapolis: (317) 992-1644
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Email
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                info@apexsurveying.net
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Offices
              </div>
              <p className="mt-1 text-sm text-zinc-700">
                <span className="font-medium">Fort Wayne:</span> 1313
                Broadway St., Fort Wayne, IN 46802
              </p>
              <p className="mt-1 text-sm text-zinc-700">
                <span className="font-medium">Indianapolis:</span>{' '}
                6330 E. 75th St. Suite 214, Indianapolis, IN 46214
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Office hours
            </div>
            <p className="text-sm text-zinc-700">
              Monday–Friday: 7:00am – 5:00pm
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-sm border border-zinc-200/70 p-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Typical projects
            </div>
            <p className="text-sm text-zinc-700">
              INDOT and municipal transportation work, roadway and
              trail improvements, site development, and associated
              surveying and construction staking.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { ContactForm };
