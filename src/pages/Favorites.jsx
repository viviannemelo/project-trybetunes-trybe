import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Switch>
          <Route path="/favorites">
            Favorites
          </Route>
        </Switch>
        <Header />
      </div>
    );
  }
}

export default Favorites;
