import React from 'react';

const ItemShipping = ({ free_shipping }) => {
  if (free_shipping) {
    return <span className='icon-freeshipping-active' />;
  }
  return <span className='icon-freeshipping-inactive' />;
};

export default ItemShipping;
