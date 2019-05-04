/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const DropdownComponent = ({ labelText, data, onChange }) => {
  return (
    <div className="dorpdownComponent">
      <div className="labelText">
        {labelText}
      </div>
    </div>
  );
};

export default DropdownComponent;