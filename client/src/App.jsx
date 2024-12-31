import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowLandingPage(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLandingPage ? (
        <div className={`landing-container ${fadeOut ? 'fade-out' : ''}`}>
          <LandingPage />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
