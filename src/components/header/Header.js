import React from 'react';
import { Navbar } from 'react-bulma-components';

import './Header.scss';

const Header = () => {
  return (
    <Navbar className='header'>
      <Navbar.Brand>
        <Navbar.Item className='header-title' href='/'>
          Messenger
        </Navbar.Item>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
