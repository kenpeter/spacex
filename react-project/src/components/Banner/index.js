/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll'

const Banner = () => {
  return (
    <div className="banner">
      <img src={process.env.PUBLIC_URL + '/space-photo.jpeg'} alt="banner" />
      <div className="topLeft">SPACE SAVVY</div>
      <div className="centered">Discover Space Missions</div>
      <i className="arrowDown" onClick={() => {
        scroll.scrollTo(400); 
      }}></i>
    </div>
  );
};

export default Banner;
