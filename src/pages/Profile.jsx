import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <BrowserRouter>
          <Switch>
            <Route> </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Profile;
