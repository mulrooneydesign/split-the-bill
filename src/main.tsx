import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto Mono:100,400,700', 'Oswald: 100', 'sans-serif'],
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
