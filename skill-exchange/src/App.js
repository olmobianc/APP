import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import './styles/App.scss';
import './styles/components/Header.scss';
import './styles/components/CTA.scss';
import './styles/components/HowItWorks.scss';
import './styles/components/Footer.scss';

import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;