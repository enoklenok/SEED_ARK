// * React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// * Layouts
import { Layout } from '@layouts';

// * Styles
import '@styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
);
