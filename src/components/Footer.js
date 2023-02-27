import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  const [showSocialType, setShowSocialType] = useState('');

  const handleMouseEnter = (type) => {
    setShowSocialType(type);
  };

  const handleMouseLeave = () => {
    setShowSocialType('');
  };

  return (
    <div className='mt-4 d-flex justify-content-center footer'>
      <div className='position-relative'>
        {showSocialType && (
          <p className='social-type position-absolute border' style={{ top: '-32px', left: '50%', transform: 'translateX(-50%)' }}>
            {showSocialType}
          </p>
        )}
        <SocialIcon
          className='border rounded-5'
          fgColor='white'
          url='https://linkedin.com/in/ryan-michael-taylor'
          onMouseEnter={() => handleMouseEnter('LinkedIn')}
          onMouseLeave={handleMouseLeave}
        />
        <SocialIcon
          className='border rounded-5'
          fgColor='white'
          url='https://github.com/Ryan-M-Taylor'
          onMouseEnter={() => handleMouseEnter('GitHub')}
          onMouseLeave={handleMouseLeave}
        />
        <SocialIcon
          className='border rounded-5'
          fgColor='white'
          bgColor='#4A00A0'
          url='mailto:ryan.taylor1@yahoo.com'
          network='email'
          label='Send Ryan an email'
          onMouseEnter={() => handleMouseEnter('Email')}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}
