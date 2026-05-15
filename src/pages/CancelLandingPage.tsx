import React, { useEffect, useRef, useState } from 'react';
import { useLandingTheme, LandingThemeProvider } from '../contexts/LandingThemeContext';
import { BRAND_COLORS, SHARE_MESSAGE } from '../constants/brandTokens';
import { TRANSLATIONS } from '../constants/translations';
import { MarketingHeader } from '../components/marketing/MarketingHeader';
import { Footer } from '../components/landing/Footer';
import { Check, Zap, Globe, Leaf, Shield, TrendingDown, Layers, Eye, Lock, Users, Star, TrendingUp, Share2, Link2, X as XIcon, CreditCard, PoundSterling, SlidersHorizontal } from 'lucide-react';

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

const RevealSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  delay?: number;
}> = ({ children, className, style, id, delay = 0 }) => {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const REWARD_GREEN = '#3DBA6A';
const REWARD_GREEN_ALPHA = (a: number) => `rgba(61, 186, 106, ${a})`;

const SHARE_OPTIONS = [
  {
    label: 'Copy link',
    icon: Link2,
    action: 'copy',
    url: '',
  },
  {
    label: 'Share on LinkedIn',
    icon: null,
    svgPath: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
    action: 'open-only',
    url: (href: string) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(href)}&title=${encodeURIComponent('Super LLM')}&summary=${encodeURIComponent(SHARE_MESSAGE)}`,
  },
  {
    label: 'Share on Facebook',
    icon: null,
    svgPath: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
    action: 'copy-and-open',
    url: (href: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`,
    copyText: SHARE_MESSAGE,
  },
  {
    label: 'Share on Instagram',
    icon: null,
    svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    action: 'copy-and-open',
    url: () => 'https://www.instagram.com/',
    copyText: SHARE_MESSAGE,
  },
  {
    label: 'Share on TikTok',
    icon: null,
    svgPath: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z',
    action: 'copy-and-open',
    url: () => 'https://www.tiktok.com/',
    copyText: SHARE_MESSAGE,
  },
  {
    label: 'Share on X',
    icon: XIcon,
    action: 'open-only',
    url: () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_MESSAGE)}`,
  },
  {
    label: 'Share on YouTube',
    icon: null,
    svgPath: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
    action: 'copy-and-open',
    url: () => 'https://www.youtube.com/',
    copyText: SHARE_MESSAGE,
  },
];

type ShareOption = typeof SHARE_OPTIONS[number];

const RewardsSection: React.FC<{ isDark: boolean; colors: typeof BRAND_COLORS.dark; t: typeof TRANSLATIONS['en'] }> = ({ isDark, colors, t }) => {
  const [openShare, setOpenShare] = useState<string | null>(null);
  const [copiedCard, setCopiedCard] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (openShare) {
        const ref = dropdownRefs.current[openShare];
        if (ref && !ref.contains(e.target as Node)) {
          setOpenShare(null);
        }
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openShare]);

  const handleShareOption = async (option: ShareOption) => {
    const href = window.location.href;
    if (option.action === 'copy') {
      await navigator.clipboard.writeText(href);
      setCopiedCard(openShare);
      setTimeout(() => setCopiedCard(null), 2000);
      setOpenShare(null);
    } else if (option.action === 'open-only' || option.action === 'share') {
      const url = typeof option.url === 'function' ? option.url(href) : option.url;
      window.open(url, '_blank', 'noopener,noreferrer');
      setOpenShare(null);
    } else if (option.action === 'copy-and-open') {
      const textToCopy = (option as { copyText?: string }).copyText ?? href;
      await navigator.clipboard.writeText(textToCopy);
      const url = typeof option.url === 'function' ? option.url(href) : option.url;
      window.open(url, '_blank', 'noopener,noreferrer');
      setOpenShare(null);
      if ((option as { copyText?: string }).copyText) {
        setToast(t.shareToast);
        setTimeout(() => setToast(null), 3500);
      }
    }
  };

  const cardIcons = [Users, Star, TrendingUp];

  return (
    <>
    {toast && (
      <div
        className="fixed bottom-6 left-1/2 z-[100] px-5 py-3 rounded-xl text-sm font-medium shadow-xl pointer-events-none"
        style={{
          transform: 'translateX(-50%)',
          backgroundColor: isDark ? '#0f2820' : '#fff',
          border: `1px solid ${REWARD_GREEN_ALPHA(0.35)}`,
          color: isDark ? 'rgba(255,255,255,0.85)' : '#0c373b',
          backdropFilter: 'blur(12px)',
          animation: 'fadeInUp 0.25s ease',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ color: REWARD_GREEN, marginRight: '8px' }}>&#10003;</span>
        {toast}
      </div>
    )}
    <section className="py-16 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="text-center mb-14">
            <span
              className="inline-block px-5 py-2 rounded-full text-xs font-medium tracking-wider mb-6"
              style={{
                backgroundColor: isDark ? REWARD_GREEN_ALPHA(0.08) : REWARD_GREEN_ALPHA(0.1),
                border: `1px solid ${isDark ? REWARD_GREEN_ALPHA(0.2) : REWARD_GREEN_ALPHA(0.3)}`,
                color: REWARD_GREEN,
              }}
            >
              {t.rewards.badge}
            </span>
            <h2
              className="heading-h2 mb-4"
              style={{ color: colors.text.primary }}
            >
              {t.rewards.heading}
            </h2>
            <p
              className="text-base max-w-2xl mx-auto leading-relaxed"
              style={{ color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary }}
            >
              {t.rewards.subheading}
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.rewards.cards.map(({ title, desc, cta }, idx) => {
            const Icon = cardIcons[idx];
            const delay = (idx + 1) * 80;
            return (
              <RevealSection key={title} delay={delay}>
                <div
                  className="p-8 rounded-2xl flex flex-col h-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,80,40,0.04)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : REWARD_GREEN_ALPHA(0.2)}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={{ backgroundColor: REWARD_GREEN_ALPHA(0.12) }}
                  >
                    <Icon className="w-6 h-6" style={{ color: REWARD_GREEN }} />
                  </div>
                  <h3
                    className="text-base font-semibold mb-3"
                    style={{ color: colors.text.primary }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-8 flex-1"
                    style={{ color: isDark ? 'rgba(255,255,255,0.55)' : colors.text.secondary }}
                  >
                    {desc}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="mailto:hello@superllm.com"
                      className="flex-1 text-center py-2.5 rounded-full text-base font-medium transition-all"
                      style={{
                        backgroundColor: 'transparent',
                        border: `1px solid ${REWARD_GREEN_ALPHA(0.35)}`,
                        color: REWARD_GREEN_ALPHA(0.85),
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = REWARD_GREEN;
                        el.style.color = REWARD_GREEN;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = REWARD_GREEN_ALPHA(0.35);
                        el.style.color = REWARD_GREEN_ALPHA(0.85);
                      }}
                    >
                      {cta}
                    </a>
                    <div
                      className="relative"
                      ref={(el) => { dropdownRefs.current[title] = el; }}
                    >
                      <button
                        onClick={() => setOpenShare(openShare === title ? null : title)}
                        className="flex items-center justify-center w-10 h-10 rounded-full transition-all flex-shrink-0"
                        style={{
                          backgroundColor: 'transparent',
                          border: `1px solid ${REWARD_GREEN_ALPHA(0.35)}`,
                          color: copiedCard === title ? REWARD_GREEN : REWARD_GREEN_ALPHA(0.85),
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = REWARD_GREEN;
                          el.style.color = REWARD_GREEN;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = REWARD_GREEN_ALPHA(0.35);
                          el.style.color = copiedCard === title ? REWARD_GREEN : REWARD_GREEN_ALPHA(0.85);
                        }}
                        title="Share"
                      >
                        {copiedCard === title
                          ? <Check className="w-4 h-4" />
                          : <Share2 className="w-4 h-4" />}
                      </button>

                      {openShare === title && (
                        <div
                          className="absolute bottom-full right-0 mb-2 w-52 rounded-xl overflow-hidden z-50"
                          style={{
                            backgroundColor: isDark ? '#0f1f1a' : '#ffffff',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                            boxShadow: isDark
                              ? '0 8px 32px rgba(0,0,0,0.5)'
                              : '0 8px 32px rgba(0,0,0,0.12)',
                          }}
                        >
                          {SHARE_OPTIONS.map((option) => {
                            const Icon2 = option.icon;
                            return (
                              <button
                                key={option.label}
                                onClick={() => handleShareOption(option)}
                                className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-left transition-colors"
                                style={{
                                  color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(12,55,59,0.75)',
                                  backgroundColor: 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.backgroundColor = isDark
                                    ? REWARD_GREEN_ALPHA(0.08)
                                    : REWARD_GREEN_ALPHA(0.06);
                                  (e.currentTarget as HTMLElement).style.color = isDark ? '#fff' : '#0c373b';
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                                  (e.currentTarget as HTMLElement).style.color = isDark
                                    ? 'rgba(255,255,255,0.75)'
                                    : 'rgba(12,55,59,0.75)';
                                }}
                              >
                                {Icon2 ? (
                                  <Icon2 className="w-4 h-4 flex-shrink-0" style={{ color: REWARD_GREEN }} />
                                ) : (
                                  <svg
                                    className="w-4 h-4 flex-shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="none"
                                    style={{ color: REWARD_GREEN }}
                                  >
                                    <path d={option.svgPath} />
                                  </svg>
                                )}
                                <span>{option.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

const CancelLandingContent = () => {
  const { theme, activeLang } = useLandingTheme();
  const isDark = theme === 'dark';
  const colors = isDark ? BRAND_COLORS.dark : BRAND_COLORS.light;
  const t = TRANSLATIONS[activeLang];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const differentiatorIcons = [CreditCard, TrendingDown, Leaf];
  const whySwitchIcons = [Layers, SlidersHorizontal, PoundSterling, Zap, Eye, Leaf, Shield];
  const problemIcons = [Layers, Lock, CreditCard, PoundSterling];

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: isDark ? '#0a1615' : '#f8fbfa' }}
    >
      {isDark && <div className="landing-grain" />}
      <MarketingHeader />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-28 pb-6 sm:pb-8 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(98, 255, 132, 0.08) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(98, 255, 132, 0.04) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center">
            <RevealSection>
              <span
                className="inline-block px-5 py-2 rounded-full text-xs font-medium tracking-wider mb-8"
                style={{
                  backgroundColor: isDark ? 'rgba(98, 255, 132, 0.08)' : 'rgba(98, 255, 132, 0.1)',
                  border: `1px solid ${isDark ? 'rgba(98, 255, 132, 0.2)' : 'rgba(98, 255, 132, 0.3)'}`,
                  color: '#62FF84',
                }}
              >
                {t.hero.badge}
              </span>
            </RevealSection>

            <RevealSection delay={80}>
              <h1
                className="heading-h1 mb-6"
                style={{ color: colors.text.primary }}
              >
                {t.hero.h1Line1}
                <br />
                {t.hero.h1Line2}
              </h1>
            </RevealSection>

            <RevealSection delay={160}>
              <p
                className="text-xl sm:text-2xl mb-12"
                style={{ color: '#62FF84', fontWeight: 600 }}
              >
                {t.hero.subHeading}
                <span style={{ textDecoration: 'underline', textDecorationColor: '#62FF84', textUnderlineOffset: '4px' }}>
                  {t.hero.subHeadingUnderline}
                </span>
                {t.hero.subHeadingRest}
              </p>
            </RevealSection>

            <RevealSection delay={240}>
              <p
                className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
                style={{ color: isDark ? 'rgba(255,255,255,0.7)' : colors.text.secondary }}
              >
                {t.hero.body1}
                <br /><br />
                {t.hero.body2}
              </p>
            </RevealSection>

            <RevealSection delay={320}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <span
                  className="px-8 py-3 text-base sm:text-lg inline-flex items-center"
                  style={{
                    fontWeight: 600,
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #62FF84 0%, #3de860 100%)',
                    border: 'none',
                    color: '#0a1615',
                    letterSpacing: '0.01em',
                    cursor: 'default',
                  }}
                >
                  {t.hero.launchingSoon}
                </span>
                <a
                  href="mailto:hello@superllm.com"
                  className="text-base inline-flex items-center gap-1.5 transition-colors"
                  style={{
                    fontWeight: 500,
                    color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#62FF84'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary; }}
                >
                  {t.hero.contactUs}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </RevealSection>

            <RevealSection delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl mx-auto text-left">
                {t.hero.bullets.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(98, 255, 132, 0.15)' }}
                    >
                      <Check className="w-3 h-3" style={{ color: '#62FF84' }} />
                    </div>
                    <span className="text-base" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </RevealSection>

          </div>
        </div>

        <RevealSection delay={480}>
          <div
            className="mt-16 -mx-6"
            style={{ backgroundColor: isDark ? 'rgba(98, 255, 132, 0.02)' : 'rgba(98, 255, 132, 0.03)' }}
          >
            <div className="flex flex-wrap items-center justify-center gap-10 py-10 px-6">
              {[
                { src: '/logos/openai.svg', alt: 'OpenAI', currentColor: true },
                { src: '/logos/claude.svg', alt: 'Claude', currentColor: false },
                { src: '/logos/gemini.png', alt: 'Gemini', currentColor: false },
                { src: '/logos/copilot-color.svg', alt: 'Copilot', currentColor: false },
                { src: '/logos/perplexity-color.svg', alt: 'Perplexity', currentColor: false },
                { src: '/logos/xai.svg', alt: 'Grok', currentColor: true },
                { src: '/logos/deepseek-color.svg', alt: 'DeepSeek', currentColor: false },
              ].map(({ src, alt, currentColor }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  title={alt}
                  style={{
                    height: '64px',
                    width: 'auto',
                    objectFit: 'contain',
                    opacity: 0.85,
                    filter: currentColor
                      ? (isDark ? 'brightness(0) invert(1)' : 'brightness(0)')
                      : undefined,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '1'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.85'; }}
                />
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Problem */}
      <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealSection>
              <div>
                <span
                  className="text-sm font-medium tracking-wider uppercase mb-5 block"
                  style={{ color: isDark ? 'rgba(255,255,255,0.35)' : colors.text.muted }}
                >
                  {t.problem.label}
                </span>
                <h2
                  className="heading-h2 mb-6"
                  style={{ color: colors.text.primary }}
                >
                  {t.problem.heading}
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary }}
                >
                  {t.problem.body1}
                </p>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary }}
                >
                  {t.problem.body2}
                </p>
                <p
                  className="text-base"
                  style={{ color: colors.text.primary, fontWeight: 500 }}
                >
                  {t.problem.punchline}
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {t.problem.items.map((label, idx) => {
                  const Icon = problemIcons[idx];
                  return (
                    <div
                      key={label}
                      className="p-5 rounded-2xl flex flex-col items-center gap-3 text-center"
                      style={{
                        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(12, 55, 59, 0.03)',
                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.06)' : colors.border}`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(12, 55, 59, 0.4)' }}
                      />
                      <span className="text-base font-medium" style={{ color: colors.text.primary }}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* The Switch */}
      <section
        className="py-16 sm:py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: isDark ? 'rgba(98, 255, 132, 0.02)' : 'rgba(98, 255, 132, 0.03)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(98, 255, 132, 0.04) 0%, transparent 70%)'
              : 'none',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <RevealSection>
            <span
              className="text-sm font-medium tracking-wider uppercase mb-5 block"
              style={{ color: isDark ? 'rgba(255,255,255,0.35)' : colors.text.muted }}
            >
              {t.theSwitch.label}
            </span>
            <h2
              className="heading-h2 mb-8"
              style={{ color: colors.text.primary }}
            >
              {t.theSwitch.heading}
            </h2>
          </RevealSection>

          <RevealSection delay={80}>
            <p
              className="text-base leading-relaxed mb-12"
              style={{ color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary }}
            >
              {t.theSwitch.body}
            </p>
          </RevealSection>

          <RevealSection delay={160}>
            <div className="flex flex-col items-center gap-3 mb-12">
              {t.theSwitch.lines.map((line, i) => (
                <p
                  key={line}
                  className="text-xl sm:text-2xl"
                  style={{ color: '#62FF84', opacity: 1 - i * 0.1, fontWeight: 600 }}
                >
                  {line}
                </p>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={240}>
            <p
              className="text-base"
              style={{ color: isDark ? 'rgba(255,255,255,0.5)' : colors.text.secondary }}
            >
              {t.theSwitch.footnote}
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealSection delay={80} className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {t.differentiator.cards.map(({ title, desc }, idx) => {
                  const Icon = differentiatorIcons[idx];
                  return (
                    <div
                      key={title}
                      className="p-6 rounded-2xl text-center"
                      style={{
                        backgroundColor: isDark ? 'rgba(98, 255, 132, 0.03)' : 'rgba(98, 255, 132, 0.05)',
                        border: `1px solid ${isDark ? 'rgba(98, 255, 132, 0.1)' : 'rgba(98, 255, 132, 0.2)'}`,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: 'rgba(98, 255, 132, 0.1)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: '#62FF84' }} />
                      </div>
                      <p className="text-base font-semibold mb-2" style={{ color: colors.text.primary }}>{title}</p>
                      <p className="text-base leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : colors.text.secondary }}>
                        {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </RevealSection>

            <RevealSection className="order-1 lg:order-2">
              <div>
                <span
                  className="text-sm font-medium tracking-wider uppercase mb-5 block"
                  style={{ color: isDark ? 'rgba(255,255,255,0.35)' : colors.text.muted }}
                >
                  {t.differentiator.label}
                </span>
                <h2
                  className="heading-h2 mb-6"
                  style={{ color: colors.text.primary }}
                >
                  {t.differentiator.heading}
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary }}
                >
                  {t.differentiator.body}
                </p>
                <p
                  className="text-base"
                  style={{ color: isDark ? 'rgba(255,255,255,0.35)' : colors.text.muted }}
                >
                  {t.differentiator.footnote}
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-16 sm:py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: isDark ? 'rgba(98, 255, 132, 0.02)' : 'rgba(98, 255, 132, 0.03)' }}
      >
        <div className="max-w-3xl mx-auto">
          <RevealSection>
            <div className="text-center mb-16">
              <span
                className="text-sm font-medium tracking-wider uppercase mb-5 block"
                style={{ color: isDark ? 'rgba(255,255,255,0.35)' : colors.text.muted }}
              >
                {t.howItWorks.label}
              </span>
              <h2 className="heading-h2" style={{ color: colors.text.primary }}>
                {t.howItWorks.heading}
              </h2>
            </div>
          </RevealSection>

          <div className="space-y-0">
            {t.howItWorks.steps.map((step, i) => (
              <RevealSection key={step.num} delay={i * 100}>
                <div
                  className="flex items-start gap-6 sm:gap-8 py-8"
                  style={{
                    borderBottom: i < 2 ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12, 55, 59, 0.08)'}` : 'none',
                  }}
                >
                  <span
                    className="text-3xl sm:text-4xl font-bold flex-shrink-0 tabular-nums"
                    style={{ color: '#62FF84', opacity: 0.4, minWidth: '48px' }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-2"
                      style={{ color: colors.text.primary }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: isDark ? 'rgba(255,255,255,0.55)' : colors.text.secondary }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-16 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealSection>
              <div>
                <span
                  className="text-sm font-medium tracking-wider uppercase mb-5 block"
                  style={{ color: isDark ? 'rgba(255,255,255,0.35)' : colors.text.muted }}
                >
                  {t.whySwitch.label}
                </span>
                <h2
                  className="heading-h2 mb-4"
                  style={{ color: colors.text.primary }}
                >
                  {t.whySwitch.heading}
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: isDark ? 'rgba(255,255,255,0.5)' : colors.text.secondary }}
                >
                  {t.whySwitch.subheading}
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={120}>
              <div className="space-y-5">
                {t.whySwitch.items.map((text, idx) => {
                  const Icon = whySwitchIcons[idx];
                  return (
                    <div key={text} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(98, 255, 132, 0.08)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: '#62FF84' }} />
                      </div>
                      <span className="text-base font-medium" style={{ color: colors.text.primary }}>
                        {text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Rewards */}
      <RewardsSection isDark={isDark} colors={colors} t={t} />

      {/* Final CTA */}
      <section className="pt-28 pb-32 sm:pt-36 sm:pb-44 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(98, 255, 132, 0.06) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(98, 255, 132, 0.03) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <RevealSection>
            <h2 className="heading-h2 mb-2" style={{ color: colors.text.primary }}>
              {t.cta.line1}
            </h2>
            <h2 className="heading-h2 mb-2" style={{ color: '#62FF84' }}>
              {t.cta.line2}
            </h2>
            <h2 className="heading-h2 mb-20" style={{ color: colors.text.primary }}>
              {t.cta.line3}
            </h2>
          </RevealSection>

          <RevealSection delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span
                className="px-8 py-3 text-base sm:text-lg inline-flex items-center"
                style={{
                  fontWeight: 600,
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #62FF84 0%, #3de860 100%)',
                  border: 'none',
                  color: '#0a1615',
                  letterSpacing: '0.01em',
                  cursor: 'default',
                }}
              >
                {t.cta.launchingSoon}
              </span>
              <a
                href="mailto:hello@superllm.com"
                className="text-base inline-flex items-center gap-1.5 transition-colors"
                style={{
                  fontWeight: 500,
                  color: isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#62FF84'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isDark ? 'rgba(255,255,255,0.6)' : colors.text.secondary; }}
              >
                {t.cta.contactUs}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const CancelLandingPage = () => (
  <LandingThemeProvider>
    <CancelLandingContent />
  </LandingThemeProvider>
);
