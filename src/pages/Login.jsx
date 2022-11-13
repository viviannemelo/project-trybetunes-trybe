import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';
import { CustomForm, CustomPaper, CustomBox } from './customPages/CustomLogin';
import logo from './customPages/images/logo.png';
import '../index.css';

class Login extends Component {
  state = {
    isButtonDisabled: true,
    nameLogin: '',
    isLoading: false,
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    }, (() => this.enabledButton()));
  };

  enabledButton = () => {
    const { nameLogin } = this.state;
    const minLength = 3;
    const nameIsValid = nameLogin.length < minLength;
    const disabled = nameIsValid;
    this.setState({
      isButtonDisabled: disabled,
    });
  };

  handleClick = async () => {
    const { nameLogin } = this.state;
    const { history } = this.props;
    this.setState({
      isLoading: true,
    });
    await createUser({ name: nameLogin });
    history.push('/search');
  };

  render() {
    const { nameLogin, isButtonDisabled, isLoading } = this.state;

    return (
      <div data-testid="page-login">
        {
          isLoading ? <Loading /> : (
            <div className="page-login">
              <CustomBox>
                <CustomForm className="login-section">
                  <CustomPaper elevation={ 3 }>
                    <img src={ logo } alt="logo-trybetunes" />
                    <TextField
                      variant="outlined"
                      type="text"
                      id="name"
                      name="nameLogin"
                      label="Qual é o seu nome?"
                      value={ nameLogin }
                      onChange={ this.onInputChange }
                      fullWidth
                    />
                    <Button
                      variant="contained"
                      data-testid="login-submit-button"
                      type="submit"
                      disabled={ isButtonDisabled }
                      onClick={ this.handleClick }
                      fullWidth
                    >
                      Entrar
                    </Button>
                  </CustomPaper>
                </CustomForm>
              </CustomBox>
            </div>
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
