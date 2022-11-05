import React, { Component } from 'react';
import Loading from './Loading';
import { createUser } from '../services/userAPI';

class Header extends Component {
  state = {
    nameLogin: '',
  };

  getUser = async () => {
    const { nameLogin } = this.state;
    this.setState({ isLoading: true });
    await createUser({ name: nameLogin });
    this.setState({ isLoading: false,
      nameLogin,
    });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="Header" data-testid="header-component">
        {
          isLoading ? <Loading /> : this.getUser
        }
      </div>
    );
  }
}

export default Header;
