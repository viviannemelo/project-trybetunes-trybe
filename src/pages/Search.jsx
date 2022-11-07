import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div data-testid="page-search">
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <div className="form-search">
                <input
                  data-testid="search-artist-input"
                  type="search"
                  placeholder="Nome do Artista"
                  value={ nameInput }
                  name="nameInput"
                  onChange={ this.onInputChange }
                />
                <button
                  data-testid="search-artist-button"
                  type="button"
                  disabled={ isButtonDisabled }
                  onClick={ this.onButtonClick }
                >
                  Pesquisar
                </button>
              </div>/* form-search */
            )
        }
        {
          (albums.length !== 0) ? (
            <div className="albums-section">
              <h3>{ `Resultado de álbuns de: ${artistName}` }</h3>
              { albums
                .map(({ artworkUrl100, collectionId, collectionName }) => (
                  <div key={ collectionId }>
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
          )
            : (<p>Nenhum álbum foi encontrado</p>)
        }
      </div>/* page-search */
    );
  }
}

export default Search;
