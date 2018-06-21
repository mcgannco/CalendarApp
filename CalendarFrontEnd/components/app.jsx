import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_form_container';
import NavBarContainer from './navbar/nav_bar_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import CalendarIndexContainer from './calendar/calendar_index_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={CalendarIndexContainer} />
    </Switch>
  </div>
);

export default App;
