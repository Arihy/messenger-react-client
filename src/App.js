import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import 'bulma/css/bulma.css';

import { Container } from 'react-bulma-components';

import Auth from 'components/auth/Auth';
import Header from 'components/header/Header';
import Notification from 'components/notification/Notification';
import Messenger from 'components/messenger/Messenger';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notification: {
        show: false,
        content: '',
        status: '',
      },
      connectedUser: JSON.parse(localStorage.getItem('user')),
    };

    this.hideNotification = this.hideNotification.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  /**
   * Permet de cacher la notification
   */
  hideNotification = () => {
    this.setState({
      notification: {
        show: false,
        content: '',
        status: '',
      },
    });
  };

  /**
   * Permet d'afficher une notification avec un content et un status
   * @param { Object } obj
   * @param { string } obj.content - contenu de la notification
   * @param { string } obj.status - status de la notification
   */
  handleNotification = ({ content, status }) => {
    this.setState({
      notification: {
        show: true,
        content: content,
        status: status,
      },
    });
  };

  /**
   * Permet de stocker l'utilisateur connecté
   * @param { Object } user
   */
  handleUser = (user) => {
    this.setState({
      connectedUser: user,
    });
  };

  /**
   * Permet d'afficher la notification si besoin
   */
  notification = () => {
    if (this.state.notification.status) {
      return (
        <Notification
          content={this.state.notification.content}
          status={this.state.notification.status}
          close={() => this.hideNotification()}
        />
      );
    }
  };

  render = () => {
    return (
      <div className='app'>
        <Header />
        <Container className='app-container'>
          <Router>
            {this.notification()}
            <Switch>
              <Route exact path='/'>
                <Redirect to='/auth'></Redirect>
              </Route>
              <Route exact path='/auth'>
                {this.state.connectedUser ? (
                  <Redirect to='/messenger'></Redirect>
                ) : (
                  <Auth
                    onNotification={(event) => this.handleNotification(event)}
                    onSignin={(event) => this.handleUser(event)}
                  ></Auth>
                )}
              </Route>
              <Route exact path='/messenger'>
                {this.state.connectedUser ? (
                  <Messenger></Messenger>
                ) : (
                  <Redirect to='/auth'></Redirect>
                )}
              </Route>
            </Switch>
          </Router>
        </Container>
      </div>
    );
  };
}

export default App;
