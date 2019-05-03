/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Filter from '../../containers/Filter';
import BodyContent from '../../containers/BodyContent';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <div className="banner">
        <img src={process.env.PUBLIC_URL + '/space-photo.jpeg'} />
        <div className="topLeft">SPACE SAVVY</div>
        <div className="centered">Discover Space Missions</div>
      </div>
      <div className="bodyContainer">
        <div className="bodySelf">
          <Filter />
          <BodyContent />
          <h1>bla</h1>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
