import React from 'react';

import './Signup.scss';

import { Form, Button } from 'react-bulma-components';

const { Input, Field, Control, Label } = Form;

/**
 *  Composant du formulaire d'inscription
 */
class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    // permet d'utiliser 'this' lors de l'appel de la fonction
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Méthode permettant de gérer les inputs du formulaire
   */
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Méthode permettant de faire remontrer les informations pour l'inscription
   */
  handleSubmit = () => {
    if (
      this.state.username.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0
    ) {
      this.props.onSubmit(this.state);
    }
  };

  render = () => {
    return (
      <div className='signup'>
        <Field>
          <Label>Username</Label>
          <Control>
            <Input
              name='username'
              type='text'
              placeholder='Username input'
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>

        <Field>
          <Label>Email</Label>
          <Control>
            <Input
              name='email'
              type='email'
              placeholder='Email input'
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>

        <Field>
          <Label>Password</Label>
          <Control>
            <Input
              name='password'
              type='password'
              placeholder='Password input'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Control>
        </Field>

        <Button onClick={this.handleSubmit}>Signup</Button>
      </div>
    );
  };
}

export default Signup;
