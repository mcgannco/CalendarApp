import merge from 'lodash/merge';
import {RECEIVE_SINGLE_MONTH, RECEIVE_ALL_MONTHS} from '../actions/calendar_actions'

const currentMonthReducer =  (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_MONTH:
      return action.month
    case RECEIVE_ALL_MONTHS:
      return null;
    default:
      return state;
  }
};

export default currentMonthReducer;
