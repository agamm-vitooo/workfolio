import React, { useState, useEffect } from 'react';
import { AuroraBackgroundDemo } from '../components/organism/HeroSection';
import Popup from '../components/organism/PopUp'; // Ensure the path is correct

const HomePages = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Check screen width when the component mounts
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsPopupOpen(true); // Show popup for mobile view (768px or less)
      } else {
        setIsPopupOpen(false); // Hide popup for desktop view
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resizing
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* Display popup only if `isPopupOpen` is true */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />

      {/* Main page content */}
      <AuroraBackgroundDemo />
    </div>
  );
};

export default HomePages;
