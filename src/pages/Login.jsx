import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Loading from '../components/Loading';
// import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    isDisabled: false,
    nameLogin: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  // handleChangeInputName = (event) => {
  //   const { name } = event.target;
  //   const { value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   }, (() => {
  //     const minLength = 3;
  //     const nameLength = nameLogin.length > minLength;
  //     const verifyName = nameLength;
  //     this.setState({
  //       isDisabled: verifyName,
  //     });
  //   }
  //   ));
  // };

  render() {
    const { nameLogin, isDisabled } = this.state;

    return (
      <div data-testid="page-login">
        <section className="login-name-input">
          <label htmlFor="name-login">
            <input
              data-testid="login-name-input"
              type="text"
              id="login-name-input"
              name="nameLogin"
              value={ nameLogin }
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ isDisabled }
            onClick={ this.fetchUserApi }
          >
            Entrar
          </button>
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
