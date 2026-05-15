import React from 'react';
import { useLandingTheme } from '../../contexts/LandingThemeContext';
import { BRAND_COLORS } from '../../constants/brandTokens';
import { TRANSLATIONS } from '../../constants/translations';

export const Footer: React.FC = () => {
  const { theme, activeLang } = useLandingTheme();
  const isDark = theme === 'dark';
  const colors = isDark ? BRAND_COLORS.dark : BRAND_COLORS.light;
  const t = TRANSLATIONS[activeLang].footer;

  return (
    <footer
      className="py-8"
      style={{
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.08)'}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: colors.text.muted }}>
          {t.copyright}
        </p>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
          {t.links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs transition-colors"
              style={{ color: isDark ? 'rgba(255,255,255,0.4)' : colors.text.secondary }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = colors.text.primary; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isDark ? 'rgba(255,255,255,0.4)' : colors.text.secondary; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
