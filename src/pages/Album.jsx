import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
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

export default Album;
