import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { setLoading } from '../actions';
import { getDetail } from '../api/items';
import '../styles/containers/ItemDetail.scss';
import { parsePriceItem } from '../utils/itemsUtil';
import Breadcrumb from './Breadcrumb';
import DescriptionItem from './DescriptionItem';
import ItemDetailPrice from './ItemDetailPrice';

const ItemDetail = (props) => {

  const {
    setLoading,
    t,
  } = props;

  const { id } = useParams();

  const [price, setPrice] = useState(null);

  const [detail, setDetail] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const responseDetail = await getDetail(id);
    setDetail(responseDetail.data.item);
    console.log(responseDetail.data.item);
    const parsePrice = parsePriceItem(responseDetail.data.item.price.amount, responseDetail.data.item.price.decimals);
    setPrice(parsePrice);
    setLoading(false);
  }, [id]);

  return (
    <>
      <Breadcrumb />
      <article className='container-list-items'>
        <article className='item-detail-container'>
          {
            detail && (
              <>
                <div className='item-detail-image'>
                  <img src={detail.picture} alt='' title='' />
                  <DescriptionItem description={detail.description} />
                </div>
                <div className='item-detail-price'>
                  <div className='detail-quantity'>
                    {detail.condition === 'new' ? t('new') : t('used')}
                    {' '}
                    -
                    {' '}
                    {detail.sold_quantity}
                    {' '}
                    {t('sold.quantity')}
                  </div>
                  <div className='item-title'>
                    {detail.title}
                  </div>
                  <ItemDetailPrice price={price} currency={detail.price.currency} />
                  <Button variant='primary'>{t('pay')}</Button>
                </div>
              </>
            )
          }
        </article>
      </article>
    </>
  );
};

const mapDispatchToProps = {
  setLoading,
};

export default withTranslation()(connect(null, mapDispatchToProps)(ItemDetail));
