import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Notifications from './components/Notifications/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </StrictMode>,
)
