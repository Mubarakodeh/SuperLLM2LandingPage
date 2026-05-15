import React from 'react';
import { LandingThemeProvider } from '../../contexts/LandingThemeContext';
import { LegalPage } from '../../components/legal/LegalPage';

const sections = [
  {
    heading: 'Company Information',
    body: (
      <>
        <p className="mb-2"><strong>Company Name:</strong> Super LLM Limited</p>
        <p className="mb-2"><strong>Registered in:</strong> England and Wales</p>
        <p className="mb-2"><strong>Registered Office:</strong> England, United Kingdom</p>
        <p className="mb-2"><strong>Email:</strong> hello@superllm.com</p>
        <p className="mb-2"><strong>Website:</strong> superllm.com</p>
        <p>Super LLM Limited is a company incorporated under the Companies Act 2006.</p>
      </>
    ),
  },
  {
    heading: 'Nature of Service',
    body: (
      <p>
        Super LLM operates an online platform that provides aggregated access to third-party artificial intelligence large language models. Super LLM Limited acts as an intermediary and platform operator; it does not own or develop the underlying AI models made available through the Service. All AI-generated content is produced by the respective third-party model providers.
      </p>
    ),
  },
  {
    heading: 'Disclaimer of Warranties',
    body: (
      <p>
        The information and services provided on this website and through the Super LLM platform are provided on an "as is" and "as available" basis. Super LLM Limited makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, completeness, or suitability of the content or services for any particular purpose. The use of any AI-generated output is at your sole risk.
      </p>
    ),
  },
  {
    heading: 'Limitation of Liability',
    body: (
      <p>
        To the fullest extent permitted by applicable law, Super LLM Limited, its directors, employees, agents, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Service, including any AI-generated output or decisions made in reliance thereon. Our total aggregate liability to you shall not exceed the amount paid by you for the Service in the three months preceding the claim.
      </p>
    ),
  },
  {
    heading: 'Intellectual Property',
    body: (
      <p>
        The Super LLM name, logo, platform design, and all proprietary software are the intellectual property of Super LLM Limited. Unauthorised reproduction, distribution, or use of any Super LLM materials is strictly prohibited. Third-party trademarks referenced on this site (including the names of AI model providers) belong to their respective owners and are used solely for descriptive purposes.
      </p>
    ),
  },
  {
    heading: 'Third-Party Links and Services',
    body: (
      <p>
        The Super LLM platform may include links to third-party websites or integrate with third-party AI model providers. Super LLM Limited has no control over the content, privacy practices, or terms of those third parties and accepts no responsibility for them. Access to third-party services is subject to their own terms of service and privacy policies.
      </p>
    ),
  },
  {
    heading: 'Environmental Commitment',
    body: (
      <p>
        Super LLM is committed to responsible and sustainable AI. Every paid subscription contributes to accredited tree-planting programmes. While we strive to make accurate representations about our environmental initiatives, specific programme outcomes are subject to the terms of our partner organisations and may vary. Details of our current environmental partnerships are available on request.
      </p>
    ),
  },
  {
    heading: 'Governing Law and Jurisdiction',
    body: (
      <p>
        This legal notice and all matters arising from or in connection with it shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales, without prejudice to any mandatory consumer protection rights you may have under the law of your country of residence.
      </p>
    ),
  },
  {
    heading: 'Data Protection Officer',
    body: (
      <p>
        For any matters relating to data protection, privacy, or the exercise of your rights under the UK GDPR or applicable data protection legislation, please contact our data protection team at hello@superllm.com with the subject line "Data Protection Enquiry".
      </p>
    ),
  },
  {
    heading: 'Regulatory Information',
    body: (
      <p>
        Super LLM Limited is registered with the Information Commissioner's Office (ICO) as a data controller. If you have an unresolved data protection concern, you have the right to lodge a complaint with the ICO at ico.org.uk or by calling 0303 123 1113.
      </p>
    ),
  },
];

const LegalNoticeContent: React.FC = () => (
  <LegalPage
    title="Legal Notice"
    subtitle="Important legal information about Super LLM Limited, including company details, disclaimers, and regulatory information."
    lastUpdated="1 May 2026"
    sections={sections}
  />
);

export const LegalNoticePage: React.FC = () => (
  <LandingThemeProvider>
    <LegalNoticeContent />
  </LandingThemeProvider>
);
