import React from 'react';
import { Breadcrumb as BreadcrumbBT } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../styles/containers/Breadcrumb.scss';

const Breadcrumb = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <>
      <BreadcrumbBT className='breadcrumb-meli'>
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return <BreadcrumbBT.Item active key={category}>{category}</BreadcrumbBT.Item>;
          })}
      </BreadcrumbBT>
    </>
  );
};

export default Breadcrumb;
