import { combineReducers } from 'redux';

import monthsReducer from './months_reducer';
import eventsReducer from './events_reducer';

const entitiesReducer = combineReducers({
  months: monthsReducer,
  events: eventsReducer
});

export default entitiesReducer;
