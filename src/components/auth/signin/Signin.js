import React from 'react';

import './Signin.scss';

import { Form, Button } from 'react-bulma-components';

const { Input, Field, Control, Label } = Form;

/**
 *  Composant du formulaire de connexion
 */
class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identification: '',
      password: '',
    };

    // permet d'utiliser 'this' lors de l'appel de la fonction
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Méthode permettant de gérer les inputs du formulaire
   */
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  /**
   * Méthode permettant de faire remontrer les informations pour la connexion
   */
  handleSubmit() {
    if (
      this.state.identification.length > 0 &&
      this.state.password.length > 0
    ) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <div className='signin'>
        <Field>
          <Label>Username or email address</Label>
          <Control>
            <Input
              name='identification'
              type='text'
              placeholder='Username or Email input'
              value={this.state.identification}
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

        <Button onClick={this.handleSubmit}>Signin</Button>
      </div>
    );
  }
}

export default Signin;
