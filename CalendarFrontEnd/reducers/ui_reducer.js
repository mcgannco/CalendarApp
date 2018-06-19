import { combineReducers } from 'redux';

import currentMonthReducer from './current_month_reducer';
import currentEventReducer from './current_event_reducer';

const uiReducer = combineReducers({
  currentMonth: currentMonthReducer,
  currentEvent: currentEventReducer
});

export default uiReducer;
