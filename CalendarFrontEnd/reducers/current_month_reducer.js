import merge from 'lodash/merge';
import {RECEIVE_SINGLE_MONTH} from '../actions/calendar_actions'

const currentMonthReducer =  (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_MONTH:
      return action.month
    default:
      return state;
  }
};

export default currentMonthReducer;
