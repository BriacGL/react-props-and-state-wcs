import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <div>
      {foodItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}

export default MenuList;

