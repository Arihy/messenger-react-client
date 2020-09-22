import React from 'react';

import './App.scss';

import 'bulma/css/bulma.css';

import { Container } from 'react-bulma-components';

import Auth from 'components/auth/Auth';
import Header from 'components/header/Header';
import Notification from 'components/notification/Notification';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notification: {
        show: false,
        content: '',
        status: '',
      },
    };

    this.hideNotification = this.hideNotification.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
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
          {this.notification()}
          <Auth onNotification={(event) => this.handleNotification(event)} />
        </Container>
      </div>
    );
  };
}

export default App;
