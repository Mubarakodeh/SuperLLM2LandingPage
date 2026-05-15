import React from 'react';
import { LandingThemeProvider } from '../../contexts/LandingThemeContext';
import { LegalPage } from '../../components/legal/LegalPage';

const sections = [
  {
    heading: '1. Introduction',
    body: (
      <p>
        This Data Processing Agreement ("DPA") supplements the Super LLM Terms of Use and Privacy Policy. It governs the processing of personal data by Super LLM Limited ("Processor") on behalf of business customers ("Controller") when Super LLM is used in a business or enterprise context. For individual consumers, data processing terms are covered in the Privacy Policy.
      </p>
    ),
  },
  {
    heading: '2. Roles and Responsibilities',
    body: (
      <p>
        When you use Super LLM as part of a business account, you act as the Controller determining the purposes and means of processing personal data submitted via the Service. Super LLM Limited acts as the Processor, processing personal data only on your instructions as documented in this DPA and the associated Terms of Use. Where Super LLM processes data for its own business purposes (e.g., billing, security), it acts as a Controller.
      </p>
    ),
  },
  {
    heading: '3. Nature and Purpose of Processing',
    body: (
      <>
        <p className="mb-3">Super LLM processes personal data on behalf of Controllers for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Providing access to AI model interfaces as requested by the Controller and its authorised users.</li>
          <li>Storing user account information and preferences.</li>
          <li>Transmitting queries to third-party AI model providers as directed by users.</li>
          <li>Logging usage for billing, audit, and compliance purposes.</li>
          <li>Operating security monitoring and fraud detection systems.</li>
        </ul>
      </>
    ),
  },
  {
    heading: '4. Data We Process',
    body: (
      <>
        <p className="mb-3">Subject to the Controller's configuration, personal data processed may include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>User identifiers (name, email address).</li>
          <li>Authentication credentials (passwords stored in hashed form only).</li>
          <li>Content submitted to AI models (which may contain personal data at the Controller's discretion).</li>
          <li>Usage metadata (timestamps, model selections, session identifiers).</li>
          <li>Device and connection data (IP address, user agent).</li>
        </ul>
      </>
    ),
  },
  {
    heading: '5. Sub-processors',
    body: (
      <p>
        Super LLM uses third-party sub-processors to operate the Service, including cloud infrastructure providers, payment processors, analytics services, and the underlying AI model providers. A current list of sub-processors is available on request at hello@superllm.com. We will provide reasonable notice of any material changes to our sub-processor list and obtain general authorisation from Controllers for such additions.
      </p>
    ),
  },
  {
    heading: '6. Data Subject Rights',
    body: (
      <p>
        Super LLM will assist Controllers in fulfilling data subject rights requests (access, rectification, erasure, portability, restriction, and objection) to the extent technically feasible, within the timescales required by applicable law. Controllers are responsible for managing data subject requests and for providing appropriate privacy notices to their end users.
      </p>
    ),
  },
  {
    heading: '7. Security Measures',
    body: (
      <p>
        Super LLM implements appropriate technical and organisational security measures including: TLS 1.2+ encryption in transit, AES-256 encryption at rest, role-based access controls, regular security assessments, and incident response procedures. We will notify Controllers of any personal data breach affecting their data without undue delay and within 72 hours of becoming aware, as required by Article 33 of the UK GDPR.
      </p>
    ),
  },
  {
    heading: '8. International Transfers',
    body: (
      <p>
        Some third-party AI model providers are located outside the UK/EEA. Where personal data is transferred internationally, Super LLM ensures that appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) or equivalent mechanisms approved by the ICO, to ensure an adequate level of data protection.
      </p>
    ),
  },
  {
    heading: '9. Retention and Deletion',
    body: (
      <p>
        Personal data processed under this DPA will be retained for the duration of the Controller's subscription and for such period thereafter as required by law. Upon termination or written request, Super LLM will securely delete or return all personal data within 30 days, unless retention is required by applicable law.
      </p>
    ),
  },
  {
    heading: '10. Enterprise DPA',
    body: (
      <p>
        Enterprise customers requiring a fully executed Data Processing Agreement with additional terms, custom retention schedules, or specific sub-processor information should contact us at hello@superllm.com. We are able to accommodate bespoke DPA requirements for Enterprise and Unlimited plan subscribers.
      </p>
    ),
  },
];

const DataProcessingContent: React.FC = () => (
  <LegalPage
    title="Data Processing"
    subtitle="This agreement governs how Super LLM processes personal data on behalf of business customers and describes our security and compliance commitments."
    lastUpdated="1 May 2026"
    sections={sections}
  />
);

export const DataProcessingPage: React.FC = () => (
  <LandingThemeProvider>
    <DataProcessingContent />
  </LandingThemeProvider>
);
