import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import HomeContainer from './home/home_container';

const App = () => (
  <div>
    <h1>Calendar</h1>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
