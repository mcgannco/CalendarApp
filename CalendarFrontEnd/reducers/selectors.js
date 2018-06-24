import values from 'lodash/values';

export const selectAllMonths = state => values(state.entities.months);
export const selectAllEvents = state => values(state.entities.events);
