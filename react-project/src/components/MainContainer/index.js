/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Filter from '../../containers/Filter';
import BodyContent from '../../containers/BodyContent';
import Banner from '../../components/Banner';

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Banner />
      <div className="bodyContainer">
        <div className="bodySelf">
          <Filter />
          <BodyContent />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
