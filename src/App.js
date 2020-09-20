import React from 'react';

import './App.scss';

import 'bulma/css/bulma.css';

import { Container } from 'react-bulma-components';

import Auth from 'components/auth/Auth';
import Header from 'components/header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Container className='app-container'>
        <Auth />
      </Container>
    </div>
  );
}

export default App;
