import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Notifications from './components/Notifications/index.jsx';
import { AuthProvider } from '@/contexts/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className="root-notifications">
        <Notifications />
      </div>
      <App />
    </AuthProvider>
  </StrictMode>,
)
