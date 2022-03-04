import React from 'react';
import { Outlet } from 'react-router';
import '../styles/layouts/SearchLayout.scss';
import Logo from '../img/logo.jpg';

const SearchLayout = (ˆ) => {
  return (
    <>
      <header className='header-meli'>
        <nav>
          <div className='search-contaainer'>
            <img src={Logo} alt='logo meli' />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SearchLayout;
