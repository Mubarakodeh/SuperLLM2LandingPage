import React from 'react';
import { LandingThemeProvider } from '../../contexts/LandingThemeContext';
import { LegalPage } from '../../components/legal/LegalPage';

const sections = [
  {
    heading: 'Your Privacy Choices',
    body: (
      <p>
        Super LLM respects your right to control how your personal data is used. This page explains the choices available to you and how to exercise them. For a full description of our data practices, please read our Privacy Policy.
      </p>
    ),
  },
  {
    heading: 'Marketing Communications',
    body: (
      <p>
        If you have opted in to receive marketing emails from Super LLM, you may unsubscribe at any time by clicking the "unsubscribe" link in any marketing email or by contacting us at hello@superllm.com. We will process your request promptly. Please note that even after unsubscribing, you may still receive transactional emails related to your account (e.g., billing receipts, security notices).
      </p>
    ),
  },
  {
    heading: 'Analytics and Performance Cookies',
    body: (
      <p>
        With your consent, we use analytics tools to understand how users navigate and use the Service. You can withdraw your consent to analytics cookies at any time via the cookie preferences panel (accessible from the footer of our website) or by adjusting your browser settings to block third-party cookies.
      </p>
    ),
  },
  {
    heading: 'Do Not Track',
    body: (
      <p>
        Some browsers transmit "Do Not Track" signals to websites. Super LLM currently does not alter its data collection practices in response to Do Not Track signals, but we honour your cookie consent choices as described above. We will review and update this position as regulatory guidance evolves.
      </p>
    ),
  },
  {
    heading: 'Data Deletion',
    body: (
      <p>
        You may request that we delete your personal data at any time by emailing hello@superllm.com with the subject line "Data Deletion Request". We will action your request within 30 days, subject to any legal obligations that require us to retain certain data. Deleting your data will result in permanent closure of your Super LLM account.
      </p>
    ),
  },
  {
    heading: 'Data Portability',
    body: (
      <p>
        You have the right to receive a copy of the personal data we hold about you in a structured, commonly used, and machine-readable format. To submit a data portability request, contact us at hello@superllm.com. We will respond within 30 days.
      </p>
    ),
  },
  {
    heading: 'Restricting or Objecting to Processing',
    body: (
      <p>
        You have the right to restrict how we use your data or to object to certain types of processing, including processing based on our legitimate interests. To exercise these rights, contact us at hello@superllm.com. We will assess your request and respond within 30 days. If we cannot accommodate your request, we will explain why.
      </p>
    ),
  },
  {
    heading: 'Withdrawing Consent',
    body: (
      <p>
        Where we rely on your consent to process personal data, you may withdraw that consent at any time without affecting the lawfulness of processing that took place before withdrawal. To withdraw consent, contact us at hello@superllm.com or use the relevant opt-out mechanism described in this page.
      </p>
    ),
  },
  {
    heading: 'Lodging a Complaint',
    body: (
      <p>
        If you are unhappy with how Super LLM handles your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's independent supervisory authority. You can contact the ICO at ico.org.uk or by calling 0303 123 1113.
      </p>
    ),
  },
];

const PrivacyChoicesContent: React.FC = () => (
  <LegalPage
    title="Privacy Choices"
    subtitle="You are in control of your personal data. Here is how to manage your privacy preferences and exercise your rights."
    lastUpdated="1 May 2026"
    sections={sections}
  />
);

export const PrivacyChoicesPage: React.FC = () => (
  <LandingThemeProvider>
    <PrivacyChoicesContent />
  </LandingThemeProvider>
);
