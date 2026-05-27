import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.jsx';
import Notifications from './Notifications/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </StrictMode>,
)

