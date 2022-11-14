import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  state = {
    artistName: '',
    isButtonDisabled: true,
    nameInput: '',
    isLoading: false,
    albums: [],
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
      nameInput: event.target.value,
      artistName: event.target.value,
    }, this.enabledButton);
  };

  enabledButton = () => {
    const { artistName } = this.state;
    const minLength = 2;
    const artistIsValid = artistName.length < minLength;
    const disabled = artistIsValid;
    this.setState({
      isButtonDisabled: disabled,
    });
  };

  onButtonClick = () => {
    const { artistName } = this.state;
    this.setState((prev) => ({
      artistName: prev.nameInput,
      nameInput: '',
      isLoading: true,
    }));

    searchAlbumsAPI(artistName).then((data) => {
      this.setState({
        isLoading: false,
        albums: data,
      });
    });
  };

  render() {
    const { artistName, isButtonDisabled,
      isLoading, albums, nameInput } = this.state;

    return (
      <div className="page-search">
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <div className="Search-form">
                <TextField
                  className="search-artist-input"
                  type="search"
                  label="Nome do Artista"
                  value={ nameInput }
                  name="nameInput"
                  onChange={ this.onInputChange }
                  variant="outlined"
                  size="small"
                />
                <Button
                  data-testid="search-artist-button"
                  type="button"
                  disabled={ isButtonDisabled }
                  onClick={ this.onButtonClick }
                >
                  Pesquisar
                </Button>
              </div>/* Search-form */
            )
        }
        {
          (albums.length !== 0) ? (
            <div className="albums-section">
              <h3>{ `Resultado de álbuns de: ${artistName}` }</h3>
              <div className="albums">
                { albums
                  .map(({ artworkUrl100, collectionId, collectionName }) => (
                    <div
                      className="album-item"
                      key={ collectionId }
                    >
                      <img src={ artworkUrl100 } alt={ collectionName } />
                      <Link
                        data-testid={ `link-to-album-${collectionId}` }
                        to={ `/album/${collectionId}` }
                      >
                        { collectionName }
                      </Link>
                    </div>
                  )) }
              </div>
            </div>
          )
            : (<p> </p>)
        }
      </div>/* page-search */
    );
  }
}

export default Search;
