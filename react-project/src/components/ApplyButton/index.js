/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ApplyButton = ({onApply}) => {
  return (
    <div className="applyButtonContainer">
      <div>&nbsp;</div>
      <button className="applyButton" onClick={onApply}>Apply</button>
    </div>
  );
};

export default ApplyButton;
