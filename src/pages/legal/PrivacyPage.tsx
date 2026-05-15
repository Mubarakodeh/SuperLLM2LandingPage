import React from 'react';
import { LandingThemeProvider } from '../../contexts/LandingThemeContext';
import { LegalPage } from '../../components/legal/LegalPage';

const sections = [
  {
    heading: '1. Who We Are',
    body: (
      <p>
        Super LLM Limited ("Super LLM", "we", "us", "our") is the data controller responsible for your personal data. We are committed to protecting your privacy and handling your data in an open and transparent manner. Our registered office is in England and Wales.
      </p>
    ),
  },
  {
    heading: '2. Data We Collect',
    body: (
      <>
        <p className="mb-3">We collect and process the following categories of personal data:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Account data:</strong> name, email address, password (hashed), and profile information you provide on registration.</li>
          <li><strong>Usage data:</strong> how you interact with the platform, features used, session duration, and AI model selections.</li>
          <li><strong>Billing data:</strong> subscription tier, payment status (payment card details are handled by our PCI-compliant payment processor and never stored by us).</li>
          <li><strong>Device and technical data:</strong> IP address, browser type, operating system, and cookies.</li>
          <li><strong>Communications:</strong> messages you send us via email or support channels.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '3. How We Use Your Data',
    body: (
      <>
        <p className="mb-3">We process your personal data for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Providing, maintaining, and improving the Service.</li>
          <li>Processing payments and managing your subscription.</li>
          <li>Communicating with you about your account, service updates, and support requests.</li>
          <li>Detecting and preventing fraud, abuse, and security incidents.</li>
          <li>Complying with legal obligations.</li>
          <li>With your consent, sending you marketing communications about Super LLM.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '4. Legal Bases for Processing',
    body: (
      <p>
        We process your personal data on the following legal bases under the UK GDPR: performance of a contract (to provide the Service), compliance with legal obligations, our legitimate interests (security, fraud prevention, and product improvement), and your consent (for marketing communications and optional analytics).
      </p>
    ),
  },
  {
    heading: '5. Data Sharing',
    body: (
      <p>
        We do not sell your personal data. We share data only with: (a) third-party AI model providers to fulfil your requests (prompts may be transmitted to these providers - see their individual privacy policies); (b) payment processors operating under contractual data processing agreements; (c) infrastructure and analytics providers bound by GDPR-compliant agreements; and (d) law enforcement or regulatory authorities where required by law.
      </p>
    ),
  },
  {
    heading: '6. Data Retention',
    body: (
      <p>
        We retain your account data for as long as your account is active and for a reasonable period thereafter to comply with legal obligations or resolve disputes. Usage logs are retained for up to 12 months. You may request deletion of your personal data at any time by contacting hello@superllm.com.
      </p>
    ),
  },
  {
    heading: '7. Your Rights',
    body: (
      <>
        <p className="mb-3">Under the UK GDPR and applicable data protection law, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access the personal data we hold about you.</li>
          <li>Rectify inaccurate or incomplete data.</li>
          <li>Erase your personal data ("right to be forgotten").</li>
          <li>Restrict or object to processing.</li>
          <li>Data portability - receive your data in a structured, machine-readable format.</li>
          <li>Withdraw consent at any time where processing is based on consent.</li>
          <li>Lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '8. Cookies',
    body: (
      <p>
        We use essential cookies to operate the Service (authentication, session management) and, with your consent, analytics cookies to understand how users interact with our platform. You can manage cookie preferences via our cookie banner or your browser settings. For full details, see our Cookie Policy.
      </p>
    ),
  },
  {
    heading: '9. Security',
    body: (
      <p>
        We implement appropriate technical and organisational measures to protect your personal data, including TLS encryption in transit, hashed credential storage, and access controls. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security but we take your data protection seriously.
      </p>
    ),
  },
  {
    heading: '10. Changes to This Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice within the Service at least 30 days before changes take effect. The "last updated" date at the top of this page reflects the most recent revision.
      </p>
    ),
  },
];

const PrivacyContent: React.FC = () => (
  <LegalPage
    title="Privacy Policy"
    subtitle="We take your privacy seriously. This policy explains what personal data we collect, how we use it, and your rights."
    lastUpdated="1 May 2026"
    sections={sections}
  />
);

export const PrivacyPage: React.FC = () => (
  <LandingThemeProvider>
    <PrivacyContent />
  </LandingThemeProvider>
);
