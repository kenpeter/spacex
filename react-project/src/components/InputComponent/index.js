/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const InputComponent = ({ labelText, placeHolderText, onChange }) => {
  return (
    <div className="inputComponent">
      <div className="labelText">
        {labelText}
      </div>
      <input placeholder={placeHolderText} onChange={onChange} />
    </div>
  );
};

export default InputComponent;