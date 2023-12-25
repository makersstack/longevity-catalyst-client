import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorHandling/ErrorBoundary';
import AuthProvider from './contex/AuthContext';

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);


