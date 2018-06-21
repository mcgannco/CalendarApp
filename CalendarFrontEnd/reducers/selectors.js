import values from 'lodash/values';

export const selectAllMonths = state => values(state.entities.months);
