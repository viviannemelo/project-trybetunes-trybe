import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Switch>
          <Route>
            Profile
          </Route>
        </Switch>
        <Header />
      </div>
    );
  }
}

export default Profile;
