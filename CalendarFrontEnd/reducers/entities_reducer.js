import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import monthsReducer from './months_reducer';
import eventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  months: monthsReducer,
  events: eventsReducer
});

export default entitiesReducer;
