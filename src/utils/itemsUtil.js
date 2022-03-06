const addDotMils = (price) => {
  const priceWithDots = price.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return priceWithDots;
};

const parsePriceItem = (amount, decimals) => {
  const priceInt = amount.toString().split('.')[0];
  const priceDec = amount.toString().split('.')[1];
  if (!priceDec) {
    return {
      priceInt: addDotMils(amount.toString()),
      priceDec: undefined,
    };
  }
  return {
    priceInt: addDotMils(priceInt),
    priceDec,
  };
};

export {
  parsePriceItem,
  addDotMils,
};

