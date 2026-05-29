import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import App from './App.jsx';
import Notifications from './components/Notifications/index.jsx';
import { uiReducer } from './reducers/uiReducer.js';

const store = configureStore({
  reducer: {
    uiReducer: uiReducer,
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <div className="root-notifications">
        <Notifications />
      </div>
      <App />
    </Provider>
  </StrictMode>,
)
