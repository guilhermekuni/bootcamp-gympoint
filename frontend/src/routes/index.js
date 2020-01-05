import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import StudentDashboard from '~/pages/Student/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/student" exact component={StudentDashboard} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
