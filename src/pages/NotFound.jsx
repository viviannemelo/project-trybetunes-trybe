import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

class NotFound extends Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <Switch>
          <Route> </Route>
        </Switch>
      </div>
    );
  }
}

export default NotFound;
