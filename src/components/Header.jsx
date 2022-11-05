import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    nameLogin: '',
    loading: false,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState({
      loading: true,
    });
    const nameLogin = await getUser();
    this.setState({
      nameLogin: nameLogin.name,
      loading: false,
    });
  };

  render() {
    const { nameLogin, loading } = this.state;

    return (
      <div className="Header">
        <header data-testid="header-component">
          {
            loading
              ? <Loading />
              : <div data-testid="header-user-name">{ nameLogin }</div>
          }
          <Link data-testid="link-to-search" to="/search">Search</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
          <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        </header>
      </div>
    );
  }
}

export default Header;
