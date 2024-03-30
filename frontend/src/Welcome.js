import React, { useState, useEffect } from 'react';
import './Welcome.css'; // Import CSS file for styling

const Welcome = () => {
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation effect on page load
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.container').classList.add('show');
    }, 500); // Adjust the delay as needed
  }, []);

  return (
    <div className={`container ${scrolled ? 'scrolled' : ''}`}>
      <h1 className="title">Welcome to Garden in the Sky</h1>
      <p className="welcome-message">
        Your ultimate gardening companion! With our app, even beginners can effortlessly grow their own healthy crops with personalized recommendations and expert guidance, bringing the joy of gardening right to your fingertips.
      </p>
      <img src="cute-plant-image.jpg" alt="Cute Plant" className="plant-image" />
      {scrolled && <button className="get-started-btn">Get Started</button>}
    </div>
  );
};

export default Welcome;
