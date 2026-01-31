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

interface ContactConfirmationEmailProps {
  name: string;
}

const primaryColor = '#E97B1F';

export function ContactConfirmationEmail({
  name,
}: ContactConfirmationEmailProps) {
  const firstName = name.split(' ')[0];

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
      <Preview>
        Thank you for contacting Apex Consulting & Surveying
      </Preview>
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
            <Heading style={h1}>Thank You for Reaching Out</Heading>

            <Text style={paragraph}>Hi {firstName},</Text>

            <Text style={paragraph}>
              Thank you for contacting Apex Consulting & Surveying. We
              have received your inquiry and a member of our team will
              review it shortly.
            </Text>

            <Text style={paragraph}>
              Here&apos;s what you can expect:
            </Text>

            <ul style={list}>
              <li style={listItem}>
                <strong>Response Time.</strong> We typically respond
                within 2-4 business days. If your matter is urgent,
                please call our office directly.
              </li>
              <li style={listItem}>
                <strong>Next Steps.</strong> A team member will review
                your inquiry and reach out to discuss your project
                needs and how Apex can help.
              </li>
              <li style={listItem}>
                <strong>Questions?</strong> Feel free to reply to this
                email or call us at (260) 755-5993 for immediate
                assistance.
              </li>
            </ul>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <Button href="https://apexsurveying.net" style={button}>
                <span className="button-text" style={{ color: '#ffffff' }}>
                  Visit Our Website
                </span>
              </Button>
            </Section>

            {/* Contact Info */}
            <Section style={contactBox}>
              <Text style={contactTitle}>Contact Information</Text>
              <Row>
                <Column style={contactColumn}>
                  <Text style={contactLabel}>Fort Wayne Office</Text>
                  <Text style={contactText}>
                    1313 Broadway St.
                    <br />
                    Fort Wayne, IN 46802
                    <br />
                    <Link href="tel:2607555993" style={contactLink}>
                      (260) 755-5993
                    </Link>
                  </Text>
                </Column>
                <Column style={contactColumn}>
                  <Text style={contactLabel}>
                    Indianapolis Office
                  </Text>
                  <Text style={contactText}>
                    6330 E. 75th St. Suite 214
                    <br />
                    Indianapolis, IN 46214
                    <br />
                    <Link href="tel:3179921644" style={contactLink}>
                      (317) 992-1644
                    </Link>
                  </Text>
                </Column>
              </Row>
              <Text style={contactEmail}>
                Email:{' '}
                <Link
                  href="mailto:info@apexsurveying.net"
                  style={contactLink}>
                  info@apexsurveying.net
                </Link>
              </Text>
            </Section>

            {/* Footer Links */}
            <Section style={footerLinks}>
              <Row>
                <Column style={footerLinkColumn}>
                  <Link
                    href="https://apexsurveying.net/services"
                    style={footerLink}>
                    Our Services
                  </Link>
                </Column>
                <Column style={footerLinkColumn}>
                  <Link
                    href="https://apexsurveying.net/experience"
                    style={footerLink}>
                    Our Experience
                  </Link>
                </Column>
                <Column style={footerLinkColumn}>
                  <Link
                    href="https://apexsurveying.net/about"
                    style={footerLink}>
                    About Us
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>

          {/* Footer */}
          <Text style={footer}>
            Apex Consulting & Surveying, Inc.
            <br />
            DBE/MBE/EBE Certified Firm
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
  margin: '0 0 24px',
  textAlign: 'center' as const,
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '32px',
  color: '#000000',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  color: '#333333',
};

const list = {
  margin: '0 0 24px',
  paddingLeft: '20px',
};

const listItem = {
  marginBottom: '16px',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333333',
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

const contactBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '10px',
  marginBottom: '24px',
};

const contactTitle = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 16px',
};

const contactColumn = {
  verticalAlign: 'top' as const,
  width: '50%',
};

const contactLabel = {
  fontSize: '14px',
  fontWeight: '600',
  color: primaryColor,
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const contactText = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#333333',
  margin: '0 0 16px',
};

const contactEmail = {
  fontSize: '14px',
  color: '#333333',
  margin: '8px 0 0',
};

const contactLink = {
  color: primaryColor,
  textDecoration: 'none',
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
  fontSize: '12px',
};

const footer = {
  maxWidth: '600px',
  margin: '20px auto 0',
  textAlign: 'center' as const,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#99a1af',
};

export default ContactConfirmationEmail;
