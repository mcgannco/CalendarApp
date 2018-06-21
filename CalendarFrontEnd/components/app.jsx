import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import CalendarIndexContainer from './calendar/calendar_index_container';
import CalendarShowContainer from './calendar/calendar_show_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path='/month/:monthId' component={ CalendarShowContainer } />
      <Route path="/" component={CalendarIndexContainer} />
    </Switch>
  </div>
);

export default App;
