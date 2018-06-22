import merge from 'lodash/merge';
import {RECEIVE_ALL_MONTHS, RECEIVE_SINGLE_MONTH} from '../actions/calendar_actions'

const monthsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_MONTHS:
      return merge({}, state, action.months);
    case RECEIVE_SINGLE_MONTH:
    let month = action.months;
      return merge({}, state, { [month.id]: month });
    default:
      return state;
  }
};

export default monthsReducer;
