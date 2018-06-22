import merge from 'lodash/merge';

const currentEventReducer =  (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default currentEventReducer;
