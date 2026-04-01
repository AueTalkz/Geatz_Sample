import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './responsive-refinements.css';
import './cta-styles.css';
import App from './App.jsx';
import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';

// Disable browser scroll restoration to ensure fresh starts on refresh
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
