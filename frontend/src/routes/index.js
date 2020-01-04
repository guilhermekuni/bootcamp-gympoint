import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
