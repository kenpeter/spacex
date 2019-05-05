/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ApplyButton = ({
  mainClass,
  onApply
}) => {
  return (
    <div className={'applyButtonContainer ' + mainClass}>
      <div className="labelText">
        &nbsp;
      </div>
      <button className="applyButton" onClick={onApply}>Apply</button>
    </div>
  );
};

export default ApplyButton;
