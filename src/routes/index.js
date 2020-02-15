import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/sign-in" component={SignIn} />

      <Redirect from="*" to="/sign-in" />
    </Switch>
  );
}
