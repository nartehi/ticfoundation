import React from 'react';
import Testimonials from './Testimonials';
import InspiringImage from '../components/img/AInsipringtech.jpeg'
import BuildingImage from '../components/img/BuildingLiteracy.jpeg'
const Commitment = () => {
  const commitmentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px',
  };

  const colStyle = {
    flex: '1 0 33.33%',
    padding: '0 15px',
    boxSizing: 'border-box',
  };

  const commitmentItemStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease-in-out',
  };

  const commitmentItemHoverStyle = {
    transform: 'scale(1.05)',
  };

  const titleStyle = {
    fontSize: '1.5em',
    color: '#007bff',
    textAlign: 'center',
    padding: '4%',
  };

  const textStyle = {
    fontSize: '1.2em',
    color: '#261f1f',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '15px',
  };

  const commitTitleStyle = {
    textAlign: 'center',
    color: '#25891c',
    padding: '4%',
    
  };

  return (
    <div style={commitmentStyle}>
      <h2 style={commitTitleStyle}>Our Commitments</h2>
      <div style={rowStyle}>
        <div style={colStyle}>
          <div
            style={commitmentItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = commitmentItemHoverStyle.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <h3 style={titleStyle}>Building Digital Literacy</h3>
            <img src={BuildingImage } alt="Building Digital Literacy" style={imageStyle} />
            
            <p style={textStyle}>
              At TiC Foundation, we are passionate about building digital literacy among teens. Our
              commitment is to bridge the digital divide by offering programs and initiatives that
              equip young minds with essential computing skills, preparing them for the digital
              challenges of tomorrow.
            </p>
          </div>
        </div>

        <div style={colStyle}>
          <div
            style={commitmentItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = commitmentItemHoverStyle.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
             <h3 style={titleStyle}>Inspiring Tech for Good</h3>
            <img src={InspiringImage } alt="Inspiring Tech for Good" style={imageStyle} />
           
            <p style={textStyle}>
              At Teens In Computing (TiC) Foundation, we are dedicated to inspiring teens to harness
              the power of technology for positive change. Our commitment lies in encouraging ethical
              and responsible use of computing skills, empowering teens to become not just proficient
              coders but also responsible digital citizens making a positive impact on society.
            </p>
          </div>
        </div>

        <div style={colStyle}>
          <div
            style={commitmentItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = commitmentItemHoverStyle.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <h3 style={titleStyle}>Fostering Inclusivity in Tech</h3>
            <img src="https://3blaws.s3.amazonaws.com/styles/carousel_2x/s3/images/DSC06369.JPG" alt="Fostering Inclusivity in Tech" style={imageStyle} />
            
            <p style={textStyle}>
              TiC Foundation is committed to fostering inclusivity in the tech industry. We believe
              in creating a diverse and inclusive environment for teens in computing, ensuring that
              every young mind, regardless of background, has equal opportunities to explore, learn,
              and innovate.
            </p>
          </div>
        </div>
      </div>
        <Testimonials />
    </div>
  );
};

export default Commitment;
