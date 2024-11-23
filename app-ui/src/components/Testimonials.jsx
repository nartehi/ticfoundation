import React from 'react';
import Testimony1 from '../components/img/Bright.jpeg'

const Testimonials = () => {
  const testimonialsStyle = {
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

  const testimonialItemStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease-in-out',
  };

  const testimonialItemHoverStyle = {
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
    borderRadius: '50%',
    marginTop: '15px',
  };

  const commitTitleStyle = {
    textAlign: 'center',
    color: '#007bff',
    padding: '4%',
  };

  return (
    <div style={testimonialsStyle}>
      <h2 style={commitTitleStyle}>What Our Students Say</h2>
      <div style={rowStyle}>
        <div style={colStyle}>
          <div
            style={testimonialItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = testimonialItemHoverStyle.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <img src= {Testimony1} alt="Zacharias Karakostas" style={imageStyle} />
            <p style={textStyle}>
              “The hands-on learning experience at TiC Foundation has been incredible. It's not just about coding; it's about solving real-world problems with technology. I feel equipped and excited for the future!”
            </p>
            <cite>- Zacharias Karakostas, Agriculture Artist</cite>
          </div>
        </div>

        <div style={colStyle}>
          <div
            style={testimonialItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = testimonialItemHoverStyle.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <img src={Testimony1}alt="Billy Lakes" style={imageStyle} />
            <p style={textStyle}>
              “TiC Foundation's commitment to inclusivity in tech education has opened doors for me I never knew existed. Their approach to learning is transformative and empowering.”
            </p>
            <cite>- Billy Lakes, Aspiring Developer</cite>
          </div>
        </div>

        <div style={colStyle}>
          <div
            style={testimonialItemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = testimonialItemHoverStyle.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
          >
            <img src={Testimony1} alt="Allison Powers" style={imageStyle} />
            <p style={textStyle}>
              “I've learned more about technology and its potential to drive change at TiC Foundation than anywhere else. The mentors are inspiring, and the community is supportive.”
            </p>
            <cite>- Allison Powers, Young Nurse</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
