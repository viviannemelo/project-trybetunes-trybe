import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <BrowserRouter>
          <Switch>
            <Route> </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default NotFound;
