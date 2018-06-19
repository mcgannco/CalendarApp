import merge from 'lodash/merge';

const monthsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default monthsReducer;
