import React, { useState, useEffect } from 'react';
import { CancelLandingPage } from './pages/CancelLandingPage';
import { TermsPage } from './pages/legal/TermsPage';
import { PrivacyPage } from './pages/legal/PrivacyPage';
import { PrivacyChoicesPage } from './pages/legal/PrivacyChoicesPage';
import { DataProcessingPage } from './pages/legal/DataProcessingPage';
import { LegalNoticePage } from './pages/legal/LegalNoticePage';

const ROUTES: Record<string, React.ReactElement> = {
  '/': <CancelLandingPage />,
  '/terms': <TermsPage />,
  '/privacy': <PrivacyPage />,
  '/privacy-choices': <PrivacyChoicesPage />,
  '/data-processing': <DataProcessingPage />,
  '/legal-notice': <LegalNoticePage />,
};

function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      e.preventDefault();
      window.history.pushState(null, '', href);
      setPath(href);
      window.scrollTo(0, 0);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return ROUTES[path] ?? <CancelLandingPage />;
}

export default App;
