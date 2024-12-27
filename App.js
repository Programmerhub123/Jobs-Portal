import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import HeroSection from "./HeroSection";
import CompanySection from "./CompanySection";
import CandidateSection from "./CandidateSection";
import CarrierAdvice from "./CarrierAdvice";
import Footer from "./Footer";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const closeModal = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      {showSignIn && <SignInModal closeModel={closeModal} />}
      {showSignUp && <SignUpModal closeModel={closeModal} />}
      <HeroSection />
      <CompanySection />
      <CandidateSection />
      <CarrierAdvice />
      <Footer />
    </div>
  );
}

export default App;
