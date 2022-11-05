import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Loading from '../components/Loading';

class Search extends Component {
  state = {
    artistName: '',
    isButtonDisabled: true,
    nameInput: '',
    loading: false,
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
    const artistIsValid = artistName.length >= minLength;
    const disabled = artistIsValid;
    this.setState({
      isButtonDisabled: disabled,
    });
  };

  render() {
    const { artistName, isButtonDisabled, nameInput, loading, albums } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        {
          loading
            ? <Loading />
            : (
              <div>
                <form>
                  <label htmlFor="search-artist-input">
                    <input
                      data-testid="search-artist-input"
                      id="search-artist-input"
                      type="text"
                      placeholder="Nome do Artista"
                      value={ nameInput }
                      onChange={ this.onInputChange }
                    />
                  </label>
                  {

                  }
                  <button
                    data-testid="search-artist-button"
                    type="button"
                    disabled={ isButtonDisabled }
                    onClick={ this.handleClick }
                  >
                    Procurar
                  </button>
                </form>
                <p>{`Resultado de álbuns de: ${artistName}`}</p>
                {
                  albums.length === 0 && (<p>Nenhum álbum foi encontrado</p>)
                }

                {
                  albums.map((element) => {
                    console.log(element);
                    return (
                      <div
                        key={ element.collectionId }
                      >
                        <p>
                          <Link
                            data-testid={ `link-to-album-${element.collectionId}` }
                            to={ `/album/${element.collectionId}` }
                          >
                            { element.collectionName }
                          </Link>
                        </p>
                      </div>
                    );
                  })
                }
              </div>
            )
        }
      </div>
    );
  }
}

export default Search;
