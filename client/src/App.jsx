import React, { useEffect ,useState } from 'react'
import SignIn from './components/SignIn'
import LandingPage from './components/LandingPage'
import './App.css';

const App = () => {
  const [showLandingPage, setShowLandingPage] = useState(true); // State to manage which page to show
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => {
        setShowLandingPage(false); // Switch to SignIn after fade-out
      }, 1000); // Matches fade-out animation duration
    }, 3000); // LandingPage stays for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <div className={`app-container ${fadeOut ? 'fade-out' : ''}`}>
    {showLandingPage ? <LandingPage /> : <SignIn />}
  </div>
  )
}

export default App
