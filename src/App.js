import React from 'react';
import 'react-responsive-modal/styles.css';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/global.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { LoadingProvider } from './contex/LoadingContext';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Header />
          <AppRoutes/>
        <Footer />
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;