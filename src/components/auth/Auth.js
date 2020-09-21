import React from 'react';

import { Tabs } from 'react-bulma-components';

import './Auth.scss';
import Signup from './signup/Signup';
import Signin from './signin/Signin';
import { API } from 'config/config';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'signup',
      accessToken: '',
    };

    this.handleTab = this.handleTabs.bind(this);
  }

  /**
   * Méthode permettant de gérer l'inscription
   * @param { Object } obj - Signup state
   * @param { string } obj.username - username
   * @param { string } obj.email - email
   * @param { string } obj.password - password
   *
   */
  async handleSingup({ username, email, password }) {
    try {
      const response = await API.post('/auth/signup', {
        username: username,
        email: email,
        password: password,
      });
      if (response.data && response.data.id) {
        const notificationContent =
          'Votre compte a bien été créé, vous pouvez vous connecter.';
        this.setState({
          activeTab: 'signin',
        });
        this.props.onNotification({
          content: notificationContent,
          status: 'success',
        });
      }
    } catch (err) {
      const notificationContent =
        "Votre compte n'a pas pu être créé, veuillez recommencer.";
      this.props.onNotification({
        content: notificationContent,
        status: 'danger',
      });
      console.error(err);
    }
  }

  /**
   * Méthode permettant de gérer la connexion
   * @param { Object } obj - Signin state
   * @param { string } obj.username - identification
   * @param { string } obj.password - password
   *
   */
  async handleSingin({ identification, password }) {
    try {
      const response = await API.post('/auth/login', {
        username: identification,
        password: password,
      });
      this.setState({
        accessToken: response.data.accessToken,
      });
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Méthode permettant de gérer les tabs
   * @param { string } tab - tab à activer
   */
  handleTabs(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    return (
      <div className='auth'>
        <Tabs>
          <Tabs.Tab
            className={this.state.activeTab === 'signup' ? 'is-active' : ''}
            onClick={() => this.handleTabs('signup')}
          >
            Signup
          </Tabs.Tab>
          <Tabs.Tab
            className={this.state.activeTab === 'signin' ? 'is-active' : ''}
            onClick={() => this.handleTabs('signin')}
          >
            Signin
          </Tabs.Tab>
        </Tabs>
        <div className='auth-tabs-container'>
          {this.state.activeTab === 'signup' ? (
            <Signup onSubmit={(event) => this.handleSingup(event)} />
          ) : (
            <Signin onSubmit={(event) => this.handleSingin(event)} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
