import React from 'react';
import { Link } from 'react-router-dom';

const ItemTitle = ({ title, onClick, to }) => {
  const display = to ? <Link to={to}>{title}</Link> : title;
  return (
    <h1 className='item-title' onClick={onClick}>
      {display}
    </h1>
  );
};

export default ItemTitle;
