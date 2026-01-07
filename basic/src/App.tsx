import { useState, useEffect } from 'react';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { LinkAccounts } from './components/LinkAccounts';
import { PlaidConnect } from './components/PlaidConnect';

type AppState = 'login' | 'link-accounts' | 'dashboard';
type PlaidState = { type: 'bank' | 'credit' } | null;

export default function App() {
  const [appState, setAppState] = useState<AppState>('login');
  const [showPlaid, setShowPlaid] = useState<PlaidState>(null);
  const [linkedAccounts, setLinkedAccounts] = useState<any>({
    checking: false,
    creditCards: []
  });

  useEffect(() => {
    // Check for JWT in local storage on mount (as per architecture)
    const jwt = localStorage.getItem('lumino_jwt');
    if (jwt) {
      const loginType = localStorage.getItem('lumino_login_type');
      const hasLinkedAccounts = localStorage.getItem('lumino_accounts_linked');
      
      // Email login goes directly to dashboard
      if (loginType === 'email') {
        setAppState('dashboard');
      } 
      // Google signup goes to link accounts first, then dashboard
      else if (loginType === 'google') {
        if (hasLinkedAccounts) {
          setAppState('dashboard');
        } else {
          setAppState('link-accounts');
        }
      }
    }
  }, []);

  const handleLogin = () => {
    const loginType = localStorage.getItem('lumino_login_type');
    
    // Email login goes directly to dashboard
    if (loginType === 'email') {
      setAppState('dashboard');
    } 
    // Google signup goes to link accounts
    else if (loginType === 'google') {
      setAppState('link-accounts');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('lumino_accounts_linked');
    setAppState('login');
  };

  const handleConnectAccount = (type: 'bank' | 'credit') => {
    setShowPlaid({ type });
  };

  const handlePlaidSuccess = (accountData: any) => {
    // Update linked accounts
    if (accountData.accountType === 'bank') {
      setLinkedAccounts((prev: any) => ({
        ...prev,
        checking: true
      }));
    } else {
      setLinkedAccounts((prev: any) => ({
        ...prev,
        creditCards: [...prev.creditCards, accountData.bank]
      }));
    }
    
    setShowPlaid(null);
  };

  const handleContinueToDashboard = () => {
    // Mark accounts as linked
    localStorage.setItem('lumino_accounts_linked', 'true');
    setAppState('dashboard');
  };

  return (
    <>
      {appState === 'login' && <LoginPage onLogin={handleLogin} />}
      
      {appState === 'link-accounts' && (
        <LinkAccounts
          onContinue={handleContinueToDashboard}
          onConnectAccount={handleConnectAccount}
          linkedAccounts={linkedAccounts}
        />
      )}
      
      {appState === 'dashboard' && <Dashboard onLogout={handleLogout} />}

      {/* Plaid Modal */}
      {showPlaid && (
        <PlaidConnect
          accountType={showPlaid.type}
          onSuccess={handlePlaidSuccess}
          onClose={() => setShowPlaid(null)}
        />
      )}
    </>
  );
}