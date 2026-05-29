'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Body from '@/components/Body';

import { useEffect } from 'react';
import './App.css';
import { useAuth } from '@/contexts/AppContext.jsx';

function App() {
  const { logOut } = useAuth();

  const handleLogout = (event) => {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      logOut();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleLogout);

    return () => {
      document.removeEventListener('keydown', handleLogout);
    }
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
