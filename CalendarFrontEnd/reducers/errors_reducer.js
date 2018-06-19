import { combineReducers } from 'redux';

import eventsErrorsReducer from './events_errors_reducer';

const errorsReducer = combineReducers({
  events: eventsErrorsReducer
});

export default errorsReducer;
