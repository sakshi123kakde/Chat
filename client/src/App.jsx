import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import Chat from './components/Chat';

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
          <Route path='/' element={< Navigate to='/signIn'/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
