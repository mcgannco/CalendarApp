import merge from 'lodash/merge';
import {RECEIVE_EVENT_ERRORS, RECEIVE_ALL_EVENTS, RECEIVE_SINGLE_EVENTS, CLEAR_EVENT_ERRORS} from '../actions/event_actions';

const eventsErrorsReducer =  (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
  case RECEIVE_ALL_EVENTS:
    return [];
  case RECEIVE_EVENT_ERRORS:
    return action.errors;
  case RECEIVE_SINGLE_EVENTS:
    return [];
  case CLEAR_EVENT_ERRORS:
    return [];
    default:
      return state;
  }
};

export default eventsErrorsReducer;
