import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Row,
  Column,
  Link,
  Img,
  Preview,
  Button,
} from '@react-email/components';

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  projectType?: string;
  message: string;
}

const primaryColor = '#E97B1F';

export function ContactNotificationEmail({
  name,
  email,
  phone,
  organization,
  projectType,
  message,
}: ContactNotificationEmailProps) {
  return (
    <Html dir="ltr" lang="en">
      <Head>
        <style>
          {`
            @media (prefers-color-scheme: dark) {
              .button-text {
                color: #ffffff !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={wrapper}>
          {/* Logo */}
          <Img
            src="https://www.apexsurveyingfw.com/color-logo-small.png"
            alt="APEX Consulting & Surveying"
            width={150}
            height="auto"
            style={logo}
          />

          {/* Main Content Card */}
          <Container style={card}>
            <Heading style={h1}>New Contact Form Submission</Heading>

            <Text style={paragraph}>
              You have received a new inquiry through the Apex website
              contact form. Here are the details:
            </Text>

            {/* Contact Details */}
            <Section style={detailsBox}>
              <Row style={detailRow}>
                <Column style={detailLabel}>Name</Column>
                <Column style={detailValue}>{name}</Column>
              </Row>
              <Row style={detailRow}>
                <Column style={detailLabel}>Email</Column>
                <Column style={detailValue}>
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </Column>
              </Row>
              {phone && (
                <Row style={detailRow}>
                  <Column style={detailLabel}>Phone</Column>
                  <Column style={detailValue}>
                    <Link href={`tel:${phone}`} style={link}>
                      {phone}
                    </Link>
                  </Column>
                </Row>
              )}
              {organization && (
                <Row style={detailRow}>
                  <Column style={detailLabel}>Organization</Column>
                  <Column style={detailValue}>{organization}</Column>
                </Row>
              )}
              {projectType && (
                <Row style={detailRow}>
                  <Column style={detailLabel}>Project Type</Column>
                  <Column style={detailValue}>{projectType}</Column>
                </Row>
              )}
            </Section>

            {/* Message */}
            <Section>
              <Text style={messageLabel}>Message</Text>
              <Text style={messageBox}>{message}</Text>
            </Section>

            {/* Reply Button */}
            <Section style={buttonContainer}>
              <Button href={`mailto:${email}`} style={button}>
                <span className="button-text" style={{ color: '#ffffff' }}>
                  Reply to {name.split(' ')[0]}
                </span>
              </Button>
            </Section>

            {/* Footer Links */}
            <Section style={footerLinks}>
              <Row>
                <Column style={footerLinkColumn}>
                  <Link
                    href="https://apexsurveying.net"
                    style={footerLink}>
                    Visit Website
                  </Link>
                  <span style={arrow}>→</span>
                </Column>
                <Column style={footerLinkColumn}>
                  <Link
                    href="mailto:info@apexsurveying.net"
                    style={footerLink}>
                    Email Team
                  </Link>
                  <span style={arrow}>→</span>
                </Column>
              </Row>
            </Section>
          </Container>

          {/* Footer */}
          <Text style={footer}>
            Apex Consulting & Surveying, Inc.
            <br />
            1313 Broadway St., Fort Wayne, IN 46802
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#fafbfb',
  fontFamily:
    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSize: '16px',
  lineHeight: '24px',
};

const wrapper = {
  margin: '0 auto',
  padding: '12px 0',
};

const logo = {
  display: 'block',
  margin: '0 auto 20px',
};

const card = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
};

const h1 = {
  margin: '0 0 16px',
  textAlign: 'center' as const,
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '32px',
  color: '#000000',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px',
  color: '#333333',
};

const detailsBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const detailRow = {
  marginBottom: '12px',
};

const detailLabel = {
  width: '120px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#666666',
  verticalAlign: 'top' as const,
};

const detailValue = {
  fontSize: '14px',
  color: '#000000',
  verticalAlign: 'top' as const,
};

const link = {
  color: primaryColor,
  textDecoration: 'none',
};

const messageLabel = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#666666',
  margin: '0 0 8px',
};

const messageBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '16px',
  fontSize: '15px',
  lineHeight: '24px',
  color: '#333333',
  margin: '0 0 24px',
  whiteSpace: 'pre-wrap' as const,
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const button = {
  display: 'inline-block',
  backgroundColor: primaryColor,
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
};

const footerLinks = {
  borderTop: '1px solid #eeeeee',
  paddingTop: '24px',
};

const footerLinkColumn = {
  textAlign: 'center' as const,
};

const footerLink = {
  color: '#000000',
  textDecoration: 'underline',
  fontWeight: '700',
  fontSize: '14px',
};

const arrow = {
  color: primaryColor,
  marginLeft: '4px',
};

const footer = {
  maxWidth: '600px',
  margin: '20px auto 0',
  textAlign: 'center' as const,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#99a1af',
};

export default ContactNotificationEmail;
