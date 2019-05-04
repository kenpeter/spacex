/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <img src={process.env.PUBLIC_URL + '/space-photo.jpeg'} alt="banner" />
      <div className="topLeft">SPACE SAVVY</div>
      <div className="centered">Discover Space Missions</div>
      <i className="arrowDown"></i>
    </div>
  );
};

export default Banner;
