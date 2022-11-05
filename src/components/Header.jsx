import React, { Component } from 'react';
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
        <header data-testid="header-component">Header</header>
        {
          loading
            ? <Loading />
            : <div data-testid="header-user-name">{ nameLogin }</div>
        }
      </div>
    );
  }
}

export default Header;
