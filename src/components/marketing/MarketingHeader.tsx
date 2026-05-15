import React, { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Menu, X, Share2, Globe, ChevronDown, ChevronRight, Link, Linkedin, Facebook, Instagram, Youtube, Twitter, Zap, Check } from 'lucide-react';
import { useLandingTheme } from '../../contexts/LandingThemeContext';
import { BRAND_COLORS, SHARE_MESSAGE } from '../../constants/brandTokens';
import { TRANSLATIONS } from '../../constants/translations';
import type { LangCode } from '../../contexts/LandingThemeContext';

function useHeaderBtn(isDark: boolean) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '9999px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.9)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(12,55,59,0.15)'}`,
    color: isDark ? 'rgba(255,255,255,0.85)' : '#0c373b',
    transition: 'background 0.15s, border-color 0.15s',
    whiteSpace: 'nowrap' as const,
    lineHeight: 1,
  };
  const hover: React.CSSProperties = {
    background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,1)',
    borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(12,55,59,0.25)',
  };
  return { base, hover };
}

function useSignInBtn(isDark: boolean) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 16px',
    borderRadius: '9999px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.9)',
    border: '1.5px solid #62FF84',
    color: isDark ? 'rgba(255,255,255,0.9)' : '#0c373b',
    boxShadow: '0 0 10px rgba(98,255,132,0.25), inset 0 0 8px rgba(98,255,132,0.05)',
    transition: 'box-shadow 0.2s, background 0.15s',
    whiteSpace: 'nowrap' as const,
    lineHeight: 1,
  };
  const hover: React.CSSProperties = {
    background: isDark ? 'rgba(98,255,132,0.07)' : 'rgba(98,255,132,0.08)',
    boxShadow: '0 0 18px rgba(98,255,132,0.4), inset 0 0 12px rgba(98,255,132,0.08)',
  };
  return { base, hover };
}

const Dropdown: React.FC<{ children: React.ReactNode; isDark: boolean }> = ({ children, isDark }) => (
  <div
    className="absolute top-full right-0 mt-2 z-50 overflow-hidden"
    style={{
      minWidth: '220px',
      borderRadius: '14px',
      background: isDark ? '#111e1d' : '#fff',
      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(12,55,59,0.12)'}`,
      boxShadow: isDark ? '0 16px 48px rgba(0,0,0,0.6)' : '0 16px 48px rgba(12,55,59,0.12)',
    }}
  >
    {children}
  </div>
);


type ShareAction = {
  label: string;
  icon: React.ReactNode;
  action: (onClose: () => void, showToast: (msg: string) => void) => void;
};

function buildShareActions(url: string): ShareAction[] {
  return [
    {
      label: 'Copy link',
      icon: <Link className="w-4 h-4" />,
      action: async (onClose) => { await navigator.clipboard.writeText(url); onClose(); },
    },
    {
      label: 'Share on LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      action: (onClose) => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent('Super LLM')}&summary=${encodeURIComponent(SHARE_MESSAGE)}`;
        window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      label: 'Share on Facebook',
      icon: <Facebook className="w-4 h-4" />,
      action: async (onClose, showToast) => {
        await navigator.clipboard.writeText(SHARE_MESSAGE);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
        onClose();
        showToast('Message copied - paste it when you open your post');
      },
    },
    {
      label: 'Share on Instagram',
      icon: <Instagram className="w-4 h-4" />,
      action: async (onClose, showToast) => {
        await navigator.clipboard.writeText(SHARE_MESSAGE);
        window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
        onClose();
        showToast('Message copied - paste it when you open your post');
      },
    },
    {
      label: 'Share on TikTok',
      icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>,
      action: async (onClose, showToast) => {
        await navigator.clipboard.writeText(SHARE_MESSAGE);
        window.open('https://www.tiktok.com/', '_blank', 'noopener,noreferrer');
        onClose();
        showToast('Message copied - paste it when you open your post');
      },
    },
    {
      label: 'Share on X',
      icon: <Twitter className="w-4 h-4" />,
      action: (onClose) => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_MESSAGE)}`, '_blank', 'noopener,noreferrer');
        onClose();
      },
    },
    {
      label: 'Share on YouTube',
      icon: <Youtube className="w-4 h-4" />,
      action: async (onClose, showToast) => {
        await navigator.clipboard.writeText(SHARE_MESSAGE);
        window.open('https://www.youtube.com/', '_blank', 'noopener,noreferrer');
        onClose();
        showToast('Message copied - paste it when you open your post');
      },
    },
  ];
}

const ShareDropdown: React.FC<{ isDark: boolean; onClose: () => void }> = ({ isDark, onClose }) => {
  const textColor = isDark ? 'rgba(255,255,255,0.85)' : '#0c373b';
  const mutedColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(12,55,59,0.45)';
  const hoverBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(12,55,59,0.04)';
  const [toast, setToast] = useState<string | null>(null);
  const url = window.location.href;
  const shareActions = buildShareActions(url);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  return (
    <>
      <Dropdown isDark={isDark}>
        <div className="px-4 py-3" style={{ borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(12,55,59,0.07)'}` }}>
          <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: mutedColor }}>Share</p>
        </div>
        <div className="py-1.5">
          {shareActions.map(({ label, icon, action }) => (
            <button
              key={label}
              onClick={() => action(onClose, showToast)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: textColor }}
              onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ color: mutedColor }}>{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </Dropdown>
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 z-[200] px-5 py-3 rounded-xl text-sm font-medium shadow-xl pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            backgroundColor: isDark ? '#0a1615' : '#fff',
            border: `1px solid ${isDark ? 'rgba(98,255,132,0.3)' : 'rgba(98,255,132,0.4)'}`,
            color: isDark ? 'rgba(255,255,255,0.85)' : '#0c373b',
            backdropFilter: 'blur(12px)',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: '#62FF84', marginRight: '8px' }}>&#10003;</span>
          {toast}
        </div>
      )}
    </>
  );
};

const LANGUAGES: { code: LangCode; label: string; sublabel: string }[] = [
  { code: 'en', label: 'English (UK)', sublabel: 'EN' },
  { code: 'us', label: 'English (US)', sublabel: 'US' },
  { code: 'es', label: 'Spanish', sublabel: 'ES' },
  { code: 'fr', label: 'French', sublabel: 'FR' },
  { code: 'de', label: 'German', sublabel: 'DE' },
];

const LangDropdown: React.FC<{ isDark: boolean; active: LangCode; onSelect: (code: LangCode) => void; onClose: () => void }> = ({
  isDark, active, onSelect, onClose,
}) => {
  const textColor = isDark ? 'rgba(255,255,255,0.85)' : '#0c373b';
  const mutedColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(12,55,59,0.45)';
  const hoverBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(12,55,59,0.04)';

  return (
    <Dropdown isDark={isDark}>
      <div className="px-4 py-3" style={{ borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.07)' : 'rgba(12,55,59,0.07)'}` }}>
        <p className="text-xs font-semibold tracking-wider uppercase" style={{ color: mutedColor }}>
          {TRANSLATIONS[active].header.popular}
        </p>
      </div>
      <div className="py-1.5">
        {LANGUAGES.map(({ code, label, sublabel }) => {
          const isActive = active === code;
          return (
            <button
              key={code}
              onClick={() => { onSelect(code); onClose(); }}
              className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: isActive ? '#62FF84' : textColor }}
              onMouseEnter={(e) => { e.currentTarget.style.background = hoverBg; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <span className="font-medium">{label}</span>
              <span style={{ color: isActive ? '#62FF84' : mutedColor, fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                {isActive ? <Check className="w-3.5 h-3.5" /> : sublabel}
              </span>
            </button>
          );
        })}
      </div>
    </Dropdown>
  );
};

export const MarketingHeader: React.FC = () => {
  const { theme, toggleTheme, activeLang, setActiveLang } = useLandingTheme();
  const isDark = theme === 'dark';
  const colors = isDark ? BRAND_COLORS.dark : BRAND_COLORS.light;
  const t = TRANSLATIONS[activeLang].header;

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [mobileShareOpen, setMobileShareOpen] = useState(false);
  const [mobileCopied, setMobileCopied] = useState<string | null>(null);
  const [mobileToast, setMobileToast] = useState<string | null>(null);

  const shareRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) setShareOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileLangOpen(false);
      setMobileShareOpen(false);
    }
  }, [mobileOpen]);

  const { base: btnBase, hover: btnHover } = useHeaderBtn(isDark);
  const { base: signBase, hover: signHover } = useSignInBtn(isDark);

  const activeLangSublabel = LANGUAGES.find((l) => l.code === activeLang)?.sublabel ?? 'EN';
  const activeLangLabel = LANGUAGES.find((l) => l.code === activeLang)?.label ?? 'English';

  const showMobileToast = (msg: string) => {
    setMobileToast(msg);
    setTimeout(() => setMobileToast(null), 3500);
  };

  const mobileShareActions = buildShareActions(window.location.href);

  const mobileItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(12,55,59,0.05)',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(12,55,59,0.1)'}`,
    color: isDark ? 'rgba(255,255,255,0.85)' : '#0c373b',
    textAlign: 'left' as const,
  };

  const mobileSubItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    padding: '10px 16px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    color: isDark ? 'rgba(255,255,255,0.75)' : '#0c373b',
    textAlign: 'left' as const,
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? isDark ? 'rgba(10, 22, 21, 0.88)' : 'rgba(248, 251, 250, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.08)'}`
            : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(98, 255, 132, 0.12)' }}
            >
              <Zap className="w-5 h-5" style={{ color: '#62FF84' }} />
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ color: colors.text.primary }}>
              Super LLM
            </span>
          </a>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-2">

            {/* Language */}
            <div ref={langRef} className="relative">
              <button
                style={btnBase}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, { ...btnBase, ...btnHover })}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, btnBase)}
                onClick={() => { setLangOpen((v) => !v); setShareOpen(false); }}
              >
                <Globe className="w-3.5 h-3.5" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(12,55,59,0.6)' }} />
                <span>{activeLangSublabel}</span>
                <ChevronDown
                  className="w-3 h-3 transition-transform duration-200"
                  style={{
                    color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(12,55,59,0.4)',
                    transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {langOpen && (
                <LangDropdown
                  isDark={isDark}
                  active={activeLang}
                  onSelect={setActiveLang}
                  onClose={() => setLangOpen(false)}
                />
              )}
            </div>

            {/* Share */}
            <div ref={shareRef} className="relative">
              <button
                style={btnBase}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, { ...btnBase, ...btnHover })}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, btnBase)}
                onClick={() => { setShareOpen((v) => !v); setLangOpen(false); }}
              >
                <Share2 className="w-3.5 h-3.5" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(12,55,59,0.6)' }} />
                <span>{t.share}</span>
              </button>
              {shareOpen && (
                <ShareDropdown isDark={isDark} onClose={() => setShareOpen(false)} />
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.06)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(12,55,59,0.12)'}`,
                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(12,55,59,0.5)',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(12,55,59,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.06)'; }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Launching Soon */}
            <button
              style={signBase}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { ...signBase, ...signHover })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, signBase)}
            >
              {t.launchingSoon}
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.06)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(12,55,59,0.12)'}`,
                color: colors.text.primary,
                cursor: 'pointer',
              }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.06)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(12,55,59,0.12)'}`,
                color: colors.text.primary,
                cursor: 'pointer',
              }}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-4 py-4 flex flex-col gap-2"
            style={{
              background: isDark ? 'rgba(10, 22, 21, 0.98)' : 'rgba(248, 251, 250, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.08)'}`,
            }}
          >
            {/* Language row */}
            <button
              style={mobileItemStyle}
              onClick={() => { setMobileLangOpen((v) => !v); setMobileShareOpen(false); }}
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(12,55,59,0.5)' }} />
                <span>{activeLangLabel}</span>
                <span style={{ fontSize: '11px', color: '#62FF84', fontWeight: 600 }}>{activeLangSublabel}</span>
              </span>
              <ChevronRight
                className="w-4 h-4 transition-transform duration-200"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(12,55,59,0.3)',
                  transform: mobileLangOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            {/* Language sub-panel */}
            {mobileLangOpen && (
              <div
                className="flex flex-col gap-0.5 mx-2 p-2 rounded-xl"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(12,55,59,0.03)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.06)'}`,
                }}
              >
                {LANGUAGES.map(({ code, label, sublabel }) => {
                  const isActive = activeLang === code;
                  return (
                    <button
                      key={code}
                      style={{
                        ...mobileSubItemStyle,
                        color: isActive ? '#62FF84' : (isDark ? 'rgba(255,255,255,0.75)' : '#0c373b'),
                        background: isActive ? (isDark ? 'rgba(98,255,132,0.07)' : 'rgba(98,255,132,0.06)') : 'transparent',
                        borderRadius: '8px',
                      }}
                      onClick={() => {
                        setActiveLang(code);
                        setMobileLangOpen(false);
                      }}
                    >
                      <span style={{ flex: 1 }}>{label}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: isActive ? '#62FF84' : (isDark ? 'rgba(255,255,255,0.3)' : 'rgba(12,55,59,0.35)') }}>
                        {sublabel}
                      </span>
                      {isActive && <Check className="w-3.5 h-3.5 ml-1 flex-shrink-0" style={{ color: '#62FF84' }} />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Share row */}
            <button
              style={mobileItemStyle}
              onClick={() => { setMobileShareOpen((v) => !v); setMobileLangOpen(false); }}
            >
              <span className="flex items-center gap-2">
                <Share2 className="w-4 h-4" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(12,55,59,0.5)' }} />
                <span>{t.share}</span>
              </span>
              <ChevronRight
                className="w-4 h-4 transition-transform duration-200"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(12,55,59,0.3)',
                  transform: mobileShareOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            {/* Share sub-panel */}
            {mobileShareOpen && (
              <div
                className="flex flex-col gap-0.5 mx-2 p-2 rounded-xl"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(12,55,59,0.03)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,55,59,0.06)'}`,
                }}
              >
                {mobileShareActions.map(({ label, icon, action }) => (
                  <button
                    key={label}
                    style={{
                      ...mobileSubItemStyle,
                      color: mobileCopied === label ? '#62FF84' : (isDark ? 'rgba(255,255,255,0.75)' : '#0c373b'),
                      borderRadius: '8px',
                    }}
                    onClick={() => {
                      if (label === 'Copy link') {
                        setMobileCopied(label);
                        setTimeout(() => setMobileCopied(null), 2000);
                      }
                      action(
                        () => { setMobileShareOpen(false); setMobileOpen(false); },
                        (msg) => { showMobileToast(msg); setMobileShareOpen(false); setMobileOpen(false); }
                      );
                    }}
                  >
                    <span style={{ color: mobileCopied === label ? '#62FF84' : '#62FF84', flexShrink: 0 }}>{icon}</span>
                    <span style={{ flex: 1 }}>{label}</span>
                    {mobileCopied === label && <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#62FF84' }} />}
                  </button>
                ))}
              </div>
            )}

            {/* Launching Soon */}
            <button
              style={{ ...signBase, justifyContent: 'center', width: '100%', marginTop: '4px', padding: '12px 16px', fontSize: '14px' }}
            >
              {t.launchingSoon}
            </button>
          </div>
        )}
      </header>

      {/* Mobile toast */}
      {mobileToast && (
        <div
          className="fixed bottom-6 left-1/2 z-[200] px-5 py-3 rounded-xl text-sm font-medium shadow-xl pointer-events-none"
          style={{
            transform: 'translateX(-50%)',
            backgroundColor: isDark ? '#0a1615' : '#fff',
            border: `1px solid ${isDark ? 'rgba(98,255,132,0.3)' : 'rgba(98,255,132,0.4)'}`,
            color: isDark ? 'rgba(255,255,255,0.85)' : '#0c373b',
            backdropFilter: 'blur(12px)',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: '#62FF84', marginRight: '8px' }}>&#10003;</span>
          {mobileToast}
        </div>
      )}
    </>
  );
};
