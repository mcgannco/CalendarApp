import merge from 'lodash/merge';

const eventsReducer =  (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default eventsReducer;
