import React, { useState, useEffect } from 'react';
import { NotificationProvider } from '../context/NotificationContext';
import { ProgramPortal } from '../features/program-portal/ProgramPortal';
import { ApplicationForm } from '../features/application-form/ApplicationForm';

export function App() {
  const getInitialView = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('form') || path.includes('apply')) {
        return 'form';
      }
    }
    return 'portal';
  };

  const [currentView, setCurrentView] = useState(getInitialView); // 'portal' | 'form'

  const navigateTo = (view) => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      const targetPath = view === 'form' ? '/form' : '/';
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ view }, '', targetPath);
      }
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('form') || path.includes('apply')) {
        setCurrentView('form');
      } else {
        setCurrentView('portal');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <NotificationProvider>
      {currentView === 'form' ? (
        <ApplicationForm onBack={() => navigateTo('portal')} />
      ) : (
        <ProgramPortal onNavigateToApply={() => navigateTo('form')} />
      )}
    </NotificationProvider>
  );
}

export default App;

