import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <Switch>
          <Route path="/album/:id">
            Album
          </Route>
        </Switch>
        <Header />
      </div>
    );
  }
}

export default Album;
