import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import StateManagementProvider from './utils/stateMng';
import { ThemeProvider as EmotionCssInJSThemeProvider } from '@emotion/react';
import theme from './styles/cssInJs/emotion/theme';

ReactDOM.render(
  <React.StrictMode>
    <StateManagementProvider>
      <BrowserRouter>
        <EmotionCssInJSThemeProvider theme={theme}>
          <App />
        </EmotionCssInJSThemeProvider>
      </BrowserRouter>
    </StateManagementProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
