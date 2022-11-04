import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    buttonEnabled: false,
    nameLogin: '',
  };

  handleChangeInputName = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    }, (() => {
      const minLength = 3;
      const nameLength = nameLogin.length > minLength;
      const verifyName = nameLength;
      this.setState({
        buttonEnabled: verifyName,
      });
    }
    ));
  };

  fetchUserApi = async () => {
    const { nameLogin } = this.state;
    this.setState({ isLoading: true });
    await createUser({ name: nameLogin });
    this.setState({ isLoading: false });
  };

  render() {
    const { nameLogin, buttonEnabled, isLoading } = this.state;

    return (
      <div data-testid="page-login">
        <section className="login-name-input">
          <label htmlFor="name-login">
            <input
              data-testid="login-name-input"
              type="text"
              id="login-name-input"
              value={ nameLogin }
              onChange={ this.handleChangeInputName }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ buttonEnabled }
            onClick={ this.fetchUserApi }
          >
            Entrar
          </button>
          {
            isLoading ? <Loading /> : <Redirect to="./search" />
          }
        </section>
      </div>
    );
  }
}

// Login.propTypes = {
//   nameLogin: PropTypes.string.isRequired,
//   buttonEnabled: PropTypes.bool.isRequired,
// };

export default Login;
