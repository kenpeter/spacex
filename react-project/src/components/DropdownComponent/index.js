/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const DropdownComponent = ({ 
  labelText, 
  data, 
  value, 
  onChange, 
  isError=false, errors='' }
) => {
  const buildLayout = data => {
    const res = data.map((item) => {
      return (
        <option value={item.key} key={item.key}>
          {item.val}
        </option>
      );
    });

    return res;
  };

  return (
    <div className="dorpdownComponent">
      <div className="labelText">
        {labelText}
      </div>
      <select onChange={onChange} value={value}>
        <option value="">Any</option>
        {buildLayout(data)}
      </select>
      {isError === false ? 
        '' 
        : 
        <div className="errors">{errors}</div>
      }
    </div>
  );
};

export default DropdownComponent;