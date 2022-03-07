import React from 'react';
import Currency from './Currency';

const ItemDetailPrice = (props) => {

  const {
    currency,
    price,
  } = props;

  return (
    <>
      {
        price && (
          <div className='item-price-currency'>
            <Currency currency={currency} />
            {' '}
            {`${price.priceInt}`}
            {
              price.priceDec && (
                <>
                  <sup>
                    {price.priceDec}
                  </sup>
                </>
              )
            }
          </div>
        )
      }
    </>
  );
};

export default ItemDetailPrice;
