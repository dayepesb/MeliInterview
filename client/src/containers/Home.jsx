import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setItems, setLoading } from '../actions';
import { getItems } from '../api/items';
import Breadcrumb from './Breadcrumb';
import ItemList from './ItemList';

const Home = (props) => {
  const {
    setItems,
    setLoading,
  } = props;

  const [searchParams] = useSearchParams();

  const items = useSelector((state) => state.items);

  useEffect(async () => {
    setLoading(true);
    const searchItems = await getItems(searchParams.get('search'));
    setItems(searchItems);
    setLoading(false);
  }, [searchParams]);

  return (
    <>
      <Breadcrumb />
      <article className='container-list-items'>
        {items.map((item) => {
          return (
            <ItemList
              key={item.id}
              title={item.title}
              picture={item.picture}
              free_shipping={item.free_shipping}
              price={item.price}
              city_name={item.city_name}
              id={item.id}
            />
          );
        })}
      </article>
    </>
  );
};

const mapDispatchToProps = {
  setItems,
  setLoading,
};

export default connect(null, mapDispatchToProps)(Home);
