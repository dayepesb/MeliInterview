import React from 'react';
import { Link } from 'react-router-dom';

function ItemThumb(props) {
  // eslint-disable-next-line react/prop-types
  const { picture, alt, handleClick, to } = props;

  return (
    <div className='item-thumb'>
      {to ? (
        <Link to={to}>
          <img src={picture} alt={alt} title={alt} onClick={handleClick} />
        </Link>
      ) : (
        <img src={picture} alt={alt} title={alt} onClick={handleClick} />
      )}
    </div>
  );
}

export default ItemThumb;
