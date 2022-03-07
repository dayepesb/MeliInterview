import React from 'react';
import { parsePriceItem } from '../utils/itemsUtil';
import Currency from './Currency';
import ItemShipping from './ItemShipping';

const ItemPrice = ({ amount, currency, free_shipping, decimals }) => {

  const price = parsePriceItem(amount, decimals);

  return (
    <div className='item-price'>
      <Currency currency={currency} />
      {`${price.priceInt}${price.priceDec ? `,${price.priceDec}` : ''}`}
      <ItemShipping free_shipping={free_shipping} />
    </div>
  );
};

export default ItemPrice;
