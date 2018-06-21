import merge from 'lodash/merge';
import {RECEIVE_ALL_MONTHS} from '../actions/calendar_actions'

const monthsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MONTHS:
      return merge({}, state, action.months);
    default:
      return state;
  }
};

export default monthsReducer;
