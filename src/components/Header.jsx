import React, { Component } from 'react';
import { Stack, ListItem } from '@mui/material';
import { getUser } from '../services/userAPI';
import logo from '../pages/customPages/images/logo.png';
import '../index.css';
import { CustomBox, CustomLink, CustomProfileLink }
  from '../pages/customPages/CustomHeader';

class Header extends Component {
  state = {
    nameLogin: '',
    isLoading: false,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState({
      isLoading: true,
    });
    const nameLogin = await getUser();
    this.setState({
      nameLogin: nameLogin.name,
      isLoading: false,
    });
  };

  render() {
    const { nameLogin, isLoading } = this.state;

    return (
      <div className="Header">
        <header>
          {
            isLoading
              ? (
                <p>loading...</p>
              )
              : (
                <CustomBox className="input">
                  <img src={ logo } alt="logo-trybetunes" />
                  <Stack spacing={ 1 }>
                    <ListItem className="search-icon">
                      <CustomLink underline="none" to="/search" component="button">
                        Pesquisa
                      </CustomLink>
                    </ListItem>
                    <ListItem className="favorite-icon">
                      <CustomLink underline="none" to="/favorites" component="button">
                        Favoritas
                      </CustomLink>
                    </ListItem>
                    <ListItem className="profile-icon">
                      <CustomLink underline="none" to="/profile" component="button">
                        Perfil
                      </CustomLink>
                    </ListItem>
                  </Stack>
                  <CustomProfileLink
                    underline="none"
                    to="/profile"
                  >
                    { nameLogin }
                  </CustomProfileLink>
                </CustomBox>
              )
          }
        </header>
      </div>
    );
  }
}

export default Header;
