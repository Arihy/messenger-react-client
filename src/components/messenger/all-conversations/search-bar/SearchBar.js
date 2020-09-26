import React from 'react';
import { API } from 'config/config';

import './SearchBar.scss';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false,
      usersList: [],
      filtredUsers: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const config = {
        headers: {
          Authorization: '',
        },
      };
      if (user && user.accessToken) {
        config.headers.Authorization = `Bearer ${user.accessToken}`;
      }
      const response = await API.get('/users/all', config);
      this.setState({
        usersList: response.data,
        filtredUsers: response.data,
      });
    } catch (err) {
      throw err;
    }
  };

  /**
   * Permet de gérer l'input de recherche d'utilisateur
   * @param {*} event
   */
  handleInputChange = (event) => {
    const valueToSearch = event.target.value;
    if (valueToSearch == null) {
      return;
    }
    this.setState({
      showDropdown: valueToSearch.length > 0,
    });
    const filtredUsers = this.getFiltredUsers(valueToSearch);
    this.setState({
      filtredUsers: filtredUsers,
    });
  };

  /**
   * Permet de filtrer les utilisateurs
   * @param { string } valueToSearch
   */
  getFiltredUsers(valueToSearch) {
    const { usersList } = this.state;
    const filtredUsers = usersList.filter(
      (user) =>
        user.username.toLowerCase().includes(valueToSearch.toLowerCase()) ||
        user.email.toLowerCase().includes(valueToSearch.toLowerCase())
    );
    return filtredUsers;
  }

  render = () => {
    return (
      <div className='search-bar'>
        <div className='search-bar-input'>
          <div className='field'>
            <label>Recherche</label>
            <div className='control'>
              <input
                className='input'
                name='identification'
                type='text'
                placeholder="Entrer le nom ou l'adresse mail d'un utilisateur"
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className='search-bar-dropdown'>
          <div
            className={`dropdown ${this.state.showDropdown ? 'is-active' : ''}`}
          >
            <div className='dropdown-menu' id='dropdown-menu' role='menu'>
              <div className='dropdown-content'>
                {this.state.filtredUsers.map((user) => (
                  <span className='dropdown-item username'>
                    {user.username}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SearchBar;
