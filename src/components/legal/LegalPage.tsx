import React from 'react';
import { useLandingTheme } from '../../contexts/LandingThemeContext';
import { BRAND_COLORS } from '../../constants/brandTokens';
import { MarketingHeader } from '../marketing/MarketingHeader';
import { Footer } from '../landing/Footer';

interface Section {
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, subtitle, lastUpdated, sections }) => {
  const { theme } = useLandingTheme();
  const isDark = theme === 'dark';
  const colors = isDark ? BRAND_COLORS.dark : BRAND_COLORS.light;

  return (
    <div className="min-h-screen" style={{ backgroundColor: isDark ? '#0a1615' : '#f8fbfa' }}>
      {isDark && <div className="landing-grain" />}
      <MarketingHeader />

      <main className="relative pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#62FF84' }}
            >
              Legal
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4"
              style={{ color: colors.text.primary }}
            >
              {title}
            </h1>
            <p className="text-lg leading-relaxed mb-3" style={{ color: colors.text.secondary }}>
              {subtitle}
            </p>
            <p className="text-sm" style={{ color: colors.text.muted }}>
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Divider */}
          <div
            className="mb-12"
            style={{ height: '1px', backgroundColor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(12,55,59,0.1)' }}
          />

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2
                  className="text-xl font-semibold mb-3"
                  style={{ color: colors.text.primary }}
                >
                  {section.heading}
                </h2>
                <div
                  className="text-base leading-relaxed"
                  style={{ color: colors.text.secondary }}
                >
                  {section.body}
                </div>
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div
            className="mt-16 p-6 rounded-2xl"
            style={{
              backgroundColor: isDark ? 'rgba(98,255,132,0.03)' : 'rgba(98,255,132,0.05)',
              border: `1px solid ${isDark ? 'rgba(98,255,132,0.1)' : 'rgba(98,255,132,0.2)'}`,
            }}
          >
            <p className="text-sm font-semibold mb-1" style={{ color: colors.text.primary }}>
              Questions about this document?
            </p>
            <p className="text-sm" style={{ color: colors.text.secondary }}>
              Contact us at{' '}
              <a
                href="mailto:hello@superllm.com"
                className="transition-colors"
                style={{ color: '#62FF84', textDecoration: 'none' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'none'; }}
              >
                hello@superllm.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
