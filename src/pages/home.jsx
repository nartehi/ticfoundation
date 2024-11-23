import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../components/img/image1.jpg';
import backgroundImage2 from '../components/img/image2.jpg';
import backgroundImage3 from '../components/img/image3.jpg';
import backgroundImage4 from '../components/img/image4.jpg';
import backgroundImage5 from '../components/img/image5.jpg';
import backgroundImage6 from '../components/img/AInsipringtech.jpeg';
import backgroundImage7 from '../components/img/BuildingLiteracy.jpeg';


const images = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5,backgroundImage6,backgroundImage7];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentDateTime = new Date();
  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = currentDateTime.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });

  const handleDonateClick = () => {
    const subject = encodeURIComponent('Computer Donation Inquiry');
    const body = encodeURIComponent('I am interested in donating a computer. Please provide more information below.');
    window.location.href = `mailto:isaackwamenarteh21@gmail.com?subject=${subject}&body=${body}`;
  };

  const homeStyle = {
    position: 'relative',
    width: '100%',
    height: '120vh',
    overflow: 'hidden',
  };

  const backgroundImageStyle = (image, show) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: show ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
    backgroundImage: `url(${image})`,
  });

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textBoxStyle = {
    color: '#fff',
    textAlign: 'center',
  };

  const dateTimeStyle = {
    marginTop: '10px',
  };

  const donateButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#0275d8',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={homeStyle}>
      {images.map((image, index) => (
        <div
          key={index}
          style={backgroundImageStyle(image, currentImageIndex === index)}
        >
          <div style={overlayStyle}>
            <div style={textBoxStyle}>
              <h1>The TiC Foundation</h1>
              <h5>Unlocking Tech Dreams For Teens</h5>
              <h5 style={dateTimeStyle}>{formattedDate} , {currentTime}</h5>
              <button onClick={handleDonateClick} style={donateButtonStyle}>Become a donor</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;