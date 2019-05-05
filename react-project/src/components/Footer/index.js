/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyRight">Copyright &copy; 2008 Space Savvy</div>
      <div className="backToTop" onClick={() => {
        scroll.scrollToTop();
      }}>Back to top</div>
    </div>
  );
};

export default Footer;
