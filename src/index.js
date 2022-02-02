import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

import ComposeContext from './components/ComposeContext';

import { AuthContextProvider } from './store/contexts/auth';
import { UserContextProvider } from './store/contexts/user';
import { ChatContextProvider } from './store/contexts/chat';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ComposeContext
        contextProviders={[
          AuthContextProvider,
          UserContextProvider,
          ChatContextProvider,
        ]}
      >
        <GlobalStyle />
        <App />
      </ComposeContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
