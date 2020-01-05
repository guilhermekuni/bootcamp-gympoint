import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import StudentDashboard from '~/pages/Student/Dashboard';
import MembershipDashboard from '~/pages/Membership/Dashboard';
import RegistrationDashboard from '~/pages/Registration/Dashboard';
import HelpOrderDashboard from '~/pages/HelpOrder/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/student" exact component={StudentDashboard} isPrivate />
      <Route path="/membership" exact component={MembershipDashboard} isPrivate />
      <Route path="/registration" exact component={RegistrationDashboard} isPrivate />
      <Route path="/help-order" exact component={HelpOrderDashboard} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
