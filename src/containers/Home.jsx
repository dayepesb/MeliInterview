import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {

  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('search'));
  }, [searchParams]);

  return (
    <>
      {' '}
      This is a homwe
      {' '}
      {searchParams.get('search')}
    </>
  );
}
