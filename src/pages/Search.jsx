import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <BrowserRouter>
          <Switch>
            <Route> </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Search;
