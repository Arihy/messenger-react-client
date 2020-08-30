import React from 'react';

import './App.scss';

import 'bulma/css/bulma.css';

import Container from 'react-bulma-components/lib/components/box';

import Auth from 'components/auth/Auth';

function App() {
  return (
    <div className='app'>
      <Container>
        <Auth />
      </Container>
    </div>
  );
}

export default App;
