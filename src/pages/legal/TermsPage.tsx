import React from 'react';
import { LandingThemeProvider } from '../../contexts/LandingThemeContext';
import { LegalPage } from '../../components/legal/LegalPage';

const sections = [
  {
    heading: '1. Acceptance of Terms',
    body: (
      <p>
        By accessing or using Super LLM ("the Service"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service. Super LLM Limited reserves the right to update these terms at any time, and continued use of the Service constitutes acceptance of the updated terms.
      </p>
    ),
  },
  {
    heading: '2. Description of Service',
    body: (
      <p>
        Super LLM provides a unified platform for accessing multiple third-party artificial intelligence large language models ("AI Models") through a single subscription. The availability and capabilities of individual AI Models may change at any time based on third-party provider decisions. Super LLM acts as an aggregation layer and does not own or operate the underlying AI Models.
      </p>
    ),
  },
  {
    heading: '3. Account Registration',
    body: (
      <p>
        To use the Service, you must create an account and provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must be at least 18 years old to register. Notify us immediately at hello@superllm.com if you suspect unauthorised access to your account.
      </p>
    ),
  },
  {
    heading: '4. Subscriptions and Billing',
    body: (
      <p>
        Super LLM offers Free, Starter, Pro, Team, Enterprise, and Unlimited subscription plans. Paid plans are billed on a recurring basis (monthly or annually) and will auto-renew unless cancelled before the renewal date. Prices are subject to change with reasonable notice. All fees are non-refundable except as required by applicable law or as expressly stated in our refund policy.
      </p>
    ),
  },
  {
    heading: '5. Acceptable Use',
    body: (
      <>
        <p className="mb-3">You agree not to use the Service to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Generate content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.</li>
          <li>Infringe any intellectual property rights of third parties.</li>
          <li>Attempt to reverse-engineer, decompile, or exploit the Service.</li>
          <li>Use the Service for spam, phishing, or other deceptive practices.</li>
          <li>Circumvent any access controls or usage limits imposed by Super LLM or underlying AI Model providers.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '6. Intellectual Property',
    body: (
      <p>
        All content, software, and technology comprising the Super LLM platform (excluding AI-generated outputs and user-submitted content) is owned by Super LLM Limited and protected by applicable intellectual property laws. You retain ownership of content you create using the Service, subject to any terms imposed by the underlying AI Model providers.
      </p>
    ),
  },
  {
    heading: '7. Disclaimers and Limitation of Liability',
    body: (
      <p>
        The Service is provided "as is" without warranties of any kind, express or implied. Super LLM does not warrant the accuracy, completeness, or reliability of AI-generated outputs. To the maximum extent permitted by law, Super LLM Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.
      </p>
    ),
  },
  {
    heading: '8. Termination',
    body: (
      <p>
        Super LLM reserves the right to suspend or terminate your account at any time for breach of these Terms or for any other reason with reasonable notice, except where immediate termination is required to protect the Service or other users. You may cancel your account at any time through your account settings.
      </p>
    ),
  },
  {
    heading: '9. Governing Law',
    body: (
      <p>
        These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>
    ),
  },
];

const TermsContent: React.FC = () => (
  <LegalPage
    title="Terms of Use"
    subtitle="Please read these terms carefully before using Super LLM. They govern your access to and use of our platform."
    lastUpdated="1 May 2026"
    sections={sections}
  />
);

export const TermsPage: React.FC = () => (
  <LandingThemeProvider>
    <TermsContent />
  </LandingThemeProvider>
);
