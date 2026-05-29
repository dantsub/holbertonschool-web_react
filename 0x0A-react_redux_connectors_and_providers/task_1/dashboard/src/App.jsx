'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Body from '@/components/Body';

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AppContext.jsx';

import './App.css';

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

// Legacy code, should be removed in favor of useSelector and useDispatch hooks
// export const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.get('isUserLoggedIn'),
//   };
// };

export default App;
