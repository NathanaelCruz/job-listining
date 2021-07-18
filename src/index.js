import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { store } from './store';
import { GlobalStyles } from './styles/global';
import { ThemeDefault } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <App />
        <GlobalStyles />
          
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
