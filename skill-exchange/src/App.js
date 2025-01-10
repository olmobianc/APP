import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/login/LoginPage';
import Signup from './pages/account creation/Signup';
import FirstStep from './pages/account creation/FirstStep';
import SecondStep from './pages/account creation/SecondStep';
import FinalStep from './pages/account creation/FinalStep'
import Welcome from './pages/account creation/Welcome'
import Dashboard from './pages/loggedInPages/Dashboard'
import Profile from './pages/loggedInPages/Profile'
import Categories from './pages/loggedInPages/Categories';
import SubCategories from './pages/loggedInPages/SubCategories';
import SubCategory from './pages/loggedInPages/SubCategory';
import Subscribe from './pages/loggedInPages/Subscribe';
import BecomePartner from './pages/landing pages/BecomePartner';
import OurMission from './pages/landing pages/OurMission';

// import styles
import './styles/App.scss';
import './styles/components/Header.scss';
import './styles/components/CTA.scss';
import './styles/components/HowItWorks.scss';
import './styles/components/Footer.scss';
import './styles/components/Tabs.scss';
import './styles/components/MacroCategory.scss';
import './styles/pages/LoginPage.scss';
import './styles/pages/Signup.scss';
import './styles/pages/Welcome.scss';
import './styles/pages/BecomePartner.scss';
import './styles/pages/OurMission.scss';
import './styles/loggedInPages/Dashboard.scss';
import './styles/loggedInPages/Profile.scss';
import './styles/loggedInPages/Categories.scss';
import './styles/loggedInPages/SubCategories.scss';
import './styles/loggedInPages/SubCategory.scss';
import './styles/loggedInPages/Subscribe.scss';
import './styles/components/Map.scss';
import './styles/components/Calendar.scss';
import './styles/components/Card.scss';
import './styles/components/ImageCarousel.scss';
import './styles/components/ScheduleMeetingForm.scss';


import 'font-awesome/css/font-awesome.min.css';

// Import the ScrollToTop component
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  const location = useLocation();

  // Define routes for sign-up flow (no header and no footer)
  const signUpPages = [
    '/login',
    '/signup',
    '/first-step',
    '/second-step',
    '/final-step',
    '/welcome',
  ];

  // Define routes for logged-in pages (no header but footer)
  const loggedInPages = ['/home', '/profile', '/categories', '/subscribe'];

  // Check if the current route is a sign-up page
  const isSignUpPage = signUpPages.includes(location.pathname);

  // Check if the current route is a logged-in page
  const isLoggedInPage =
  ['/home', '/profile', '/categories', '/subscribe'].some(path =>
    location.pathname.startsWith(path)
  );


  // Check if the current route is not a sign-up page and should have a footer
  const shouldRenderFooter = !isSignUpPage;

  return (
    <div>
      {/* Show the header only if not a sign-up or logged-in page */}
      {!isSignUpPage && !isLoggedInPage && <Header />}
      
      <main>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Sign Up Pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/first-step" element={<FirstStep />} />
          <Route path="/second-step" element={<SecondStep />} />
          <Route path="/final-step" element={<FinalStep />} />
          <Route path="/welcome" element={<Welcome />} />

          {/* Logged In Pages */}
          <Route path="/home" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:title" element={<SubCategories />} />
          <Route path="/categories/:title/:subcategory" element={<SubCategory />} />
          <Route path="/subscribe" element={<Subscribe />} />

          {/* Landing Pages */}
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/mission" element={<OurMission />} />
        </Routes>
      </main>

      {/* Footer is shown everywhere except for sign-up pages */}
      {shouldRenderFooter && <Footer />}
    </div>
  );
};

export default App;
