import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { UserProvider } from './context/UserProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store/slices/store';
import { RepasoApp } from './RepasoApp';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <RepasoApp />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
