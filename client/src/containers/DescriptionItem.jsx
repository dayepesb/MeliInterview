import React from 'react';
import { withTranslation } from 'react-i18next';
import LineText from './LineText';

const DescriptionItem = (props) => {

  const {
    t,
    description,
  } = props;

  return (
    <>
      <div className='item-description-container'>
        {description && (
          <>
            <span className='title-item-description'>
              {t('description.title')}
            </span>
            <span className='item-description'>
              <LineText text={description} />
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default withTranslation()(DescriptionItem);
