import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

class Search extends Component {
  state = {
    artistName: '',
    isButtonDisabled: true,
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
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
    const { artistName, isButtonDisabled } = this.state;

    return (
      <div data-testid="page-search">
        <form>
          <label htmlFor="search-artist-input">
            <input
              data-testid="search-artist-input"
              id="search-artist-input"
              type="text"
              placeholder="Nome do Artista"
              value={ artistName }
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
        <BrowserRouter>
          <Switch>
            <Route>
              <Header />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Search;
