/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Filter from '../../containers/Filter';
import BodyContent from '../../containers/BodyContent';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

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
      <Footer />
    </div>
  );
};

export default MainContainer;
