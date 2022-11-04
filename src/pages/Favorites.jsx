import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <BrowserRouter>
          <Switch>
            <Route path="/favorites"> </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Favorites;
