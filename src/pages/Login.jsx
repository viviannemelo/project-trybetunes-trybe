import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends Component {
  state = {
    isButtonDisabled: true,
    nameLogin: '',
    loading: true,
  };

  handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    }, this.enabledButton);
  };

  enabledButton = () => {
    const { nameLogin } = this.state;
    const minLength = 3;
    const nameIsValid = nameLogin.length >= minLength;
    const disabled = nameIsValid;
    this.setState({
      isButtonDisabled: disabled,
    });
  };

  handleClick = async () => {
    const { nameLogin } = this.state;
    const { history } = this.props;
    this.setState({
      loading: false,
    });
    await createUser({ name: nameLogin });
    history.push('/search');
  };

  render() {
    const { nameLogin, isButtonDisabled, loading } = this.state;

    return (
      <div data-testid="page-login">
        {
          loading ? <Loading /> : (
            <section className="login-section">
              <label htmlFor="login-name-input">
                <input
                  data-testid="login-name-input"
                  type="text"
                  id="login-name-input"
                  name="nameLogin"
                  placeholder="Nome"
                  value={ nameLogin }
                  onChange={ this.handleChange }
                />
              </label>
              <button
                data-testid="login-submit-button"
                type="submit"
                disabled={ isButtonDisabled }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
            </section>
          )
        }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
//   nameLogin: PropTypes.string.isRequired,
//   buttonEnabled: PropTypes.bool.isRequired,
};

export default Login;
