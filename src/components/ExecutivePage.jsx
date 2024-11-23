import React from 'react';
import founderImage from '../components/img/founder.png';
import LilianeImage from '../components/img/Liliane.jpeg';
import KyleImage from '../components/img/Kyle.jpeg'
import IsaacImage from '../components/img/Isaac.jpeg'
import SamihaImage from '../components/img/Samiha.jpeg'
import DimitrosImage from '../components/img/Dimitros.jpeg'
import BrightImage from '../components/img/Bright.jpeg';
import FrankImage from '../components/img/Frank.jpeg';
import SirArthurImage from '../components/img/SirArthur.jpeg';
import PrinceImage from '../components/img/Prince.jpeg';
const ExecutivePage = () => {
  const executives = [
    {
      id: 1,
      name: 'Isaac Narteh',
      imageSrc: IsaacImage,
      role: 'Executive Director',
      workExperience: 'Software Engineer @ Goldman Sachs',
    },
    {
      id: 2,
      name: 'Liliane Azabe',
      imageSrc: LilianeImage,
      role: 'Assistant Program Director',
      workExperience: 'Corporate Intern @ Occidental Petroleum',
    },
    {
      id: 3,
      name: 'Kyle Drummonds',
      imageSrc: KyleImage,
      role: 'Program Manager',
      workExperience: 'Software Engineer @ Wells Fargo',
    },
    {
      id: 4,
      name: 'Samiha Sultana',
      imageSrc: SamihaImage,
      role: 'Social Media Manager',
      workExperience: 'Software Engineer @ Bank of America',
    },
    {
      id: 5,
      name: 'Bright Awiakye',
      imageSrc: BrightImage,
      role: 'Legal Advisor',
      workExperience: 'Corporal, Ghana Police Service',
    },
    {
      id: 6,
      name: 'Dimitrios Ntentia',
      imageSrc: DimitrosImage,
      role: 'Technical Lead',
      workExperience: 'PhD @ Purdue University',
    },
    {
      id: 7,
      name: 'Frank Owusu',
      imageSrc: FrankImage,
      role: 'Communication Director',
      workExperience: 'Automechanic Engineer',
    },
    {
      id: 8,
      name: 'Prince Agyemang',
      imageSrc: PrinceImage,
      role: 'Ground Operation Officer',
      workExperience: 'Self Employed',
    },
    {
      id: 9,
      name: 'John Arthur',
      imageSrc: SirArthurImage,
      role: 'Chief Field Officer',
      workExperience: 'Teacher',
    },
  ];

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const colStyle = {
    flex: '1 0 30%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const executiveItemStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const roleStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '5px',
  };

  const workExperienceStyle = {
    fontSize: '0.9rem',
    color: '#999',
  };

  return (
    <div style={containerStyle}>
      <h2>Our Great Leadership Team</h2>
      <div style={rowStyle}>
        {executives.map((executive) => (
          <div key={executive.id} style={colStyle}>
            <div style={executiveItemStyle}>
              <img src={executive.imageSrc} alt={executive.name} style={imageStyle} />
              <h3 style={nameStyle}>{executive.name}</h3>
              <p style={roleStyle}>{executive.role}</p>
              <p style={workExperienceStyle}>{executive.workExperience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutivePage;
