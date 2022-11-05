import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Switch>
          <Route>
            ProfileEdit
          </Route>
        </Switch>
        <Header />
      </div>
    );
  }
}

export default ProfileEdit;
