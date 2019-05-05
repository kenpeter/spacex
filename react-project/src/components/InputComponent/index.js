/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const InputComponent = ({ 
  mainClass='',
  labelText, 
  placeHolderText, 
  onChange 
}) => {
  return (
    <div className={'inputComponent ' + mainClass}>
      <div className="labelText">
        {labelText}
      </div>
      <input placeholder={placeHolderText} onChange={onChange} />
    </div>
  );
};

export default InputComponent;