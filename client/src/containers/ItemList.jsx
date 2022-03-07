import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/ItemList.scss';
import Clear from './Clear';
import ItemPrice from './ItemPrice';
import ItemThumb from './ItemThumb';
import ItemTitle from './ItemTitle';

function ItemList(props) {
  const { title, picture, free_shipping, price, city_name, id } = props;

  const to = `/items/${id}`;
  return (
    <Link to={to}>
      <article className='item-component'>
        <div className='item-content'>
          <div className='item-left'>
            <ItemThumb picture={picture} alt={title} to={to} />
          </div>
          <div className='item-right'>
            <header>
              <ItemPrice {...price} free_shipping={free_shipping} />
              <ItemTitle title={title} to={to} />
            </header>
            <address>{city_name}</address>
            <Clear />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default ItemList;
