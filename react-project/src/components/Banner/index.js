/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-scroll'

const Banner = () => {
  return (
    <div className="banner">
      <img src={process.env.PUBLIC_URL + '/space-photo.jpeg'} alt="banner" />
      <div className="topLeft">SPACE SAVVY</div>
      <div className="centered">Discover Space Missions</div>
      <Link activeClass="active" to="scrollDestination" spy={true} smooth={true} offset={50} duration={500} delay={200}>
        <i className="arrowDown"></i>
      </Link>
    </div>
  );
};

export default Banner;
