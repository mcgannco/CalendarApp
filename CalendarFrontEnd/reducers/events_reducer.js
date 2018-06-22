import merge from 'lodash/merge';
import {RECEIVE_ALL_EVENTS} from '../actions/event_actions'

const eventsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.events);
    default:
      return state;
  }
};

export default eventsReducer;
