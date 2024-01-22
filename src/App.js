import React from 'react';
import 'react-responsive-modal/styles.css';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/global.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import { LoadingProvider } from './contexts/LoadingContext';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Header />
        <AppRoutes />
        <ScrollToTopButton />
        <Footer />
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;