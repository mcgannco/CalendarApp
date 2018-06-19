import merge from 'lodash/merge';

const currentMonthReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default currentMonthReducer;
