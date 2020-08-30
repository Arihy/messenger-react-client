import React from 'react';

import './Auth.scss';
import Signup from './signup/Signup';

class Auth extends React.Component {
  /**
   * Méthode permettant de gérer l'inscription
   * @param { Object } obj - Signup state
   * @param { string } obj.username - username
   * @param { string } obj.email - email
   * @param { string } obj.password - password
   *
   */
  handleSingup({ username, email, password }) {
    console.log(`${username} - ${email} - ${password}`);
  }

  render() {
    return (
      <div className='auth'>
        <h1 className='title'>Signup</h1>
        <Signup onSubmit={(event) => this.handleSingup(event)} />
      </div>
    );
  }
}

export default Auth;
