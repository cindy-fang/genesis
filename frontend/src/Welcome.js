import React, { useState, useEffect } from 'react';
import './Welcome.css'; // Import CSS file for styling
import plant from './Assets/plant4.png'; // Import the image


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
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px', marginTop: '200px' }}>
      <h1 className="title">Welcome to Garden in the Sky</h1>
      <p className="welcome-message" style={{ textAlign: 'center', paddingLeft: '410px', paddingRight: '410px', marginBottom: '20px'}}>
        Your ultimate gardening companion! With our app, even beginners can effortlessly grow their own healthy crops with personalized recommendations and expert guidance, bringing the joy of gardening right to your fingertips.
      </p>
      </div>
      <img src={plant} alt="Cute Plant" className="plant-image" style={{ width: '500px', marginBottom: '20px' }}/>
      <p className="welcome-message" style={{ textAlign: 'center', paddingLeft: '410px', paddingRight: '410px', marginBottom: '100px'}}>
      💚 Let's personalize your future garden 🥬
      </p>
    </div>
    
  );
};

export default Welcome;
