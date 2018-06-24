import merge from 'lodash/merge';
import {RECEIVE_ALL_EVENTS, RECEIVE_SINGLE_EVENT} from '../actions/event_actions'

const eventsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.events);
    case RECEIVE_SINGLE_EVENT:
    debugger
      return(merge({}, state, {[action.event.id]: action.event }));
    default:
      return state;
  }
};

export default eventsReducer;
