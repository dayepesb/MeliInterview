import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/Loading.scss';

const Loading = () => {
  return (
    <div className='parent-loading'>
      <Spinner animation='border' variant='warning' />
    </div>
  );
};

export default Loading;
