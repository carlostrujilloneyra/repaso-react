import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './services/store/store';
import { AppPruebasRouter } from './router/AppPruebasRouter';
import { appRouter } from './router/app.router';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
);
