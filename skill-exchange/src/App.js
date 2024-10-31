import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import BecomePartner from './pages/BecomePartner';

// import styles
import './styles/App.scss';
import './styles/components/Header.scss';
import './styles/components/CTA.scss';
import './styles/components/HowItWorks.scss';
import './styles/components/Footer.scss';
import './styles/pages/LoginPage.scss';
import './styles/pages/BecomePartner.scss';

import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/become-partner" element={<BecomePartner />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;