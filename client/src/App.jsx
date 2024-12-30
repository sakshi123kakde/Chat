import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setShowLandingPage(false), 1000); // Wait for fade-out to complete
    }, 3000); // Display LandingPage for 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {showLandingPage ? (
        <div className={`landing-container ${fadeOut ? 'fade-out' : ''}`}>
          <LandingPage />
        </div>
      ) : (
        <div className="signin-container">
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default App;
