import * as APIUtil from '../util/calendar_api_util';
export const RECEIVE_ALL_MONTHS  = 'RECEIVE_ALL_MONTHS ';
export const RECEIVE_SINGLE_MONTH  = 'RECEIVE_SINGLE_MONTH ';

export const receiveAllMonths = (months) => (
  {
    type: RECEIVE_ALL_MONTHS,
    months
  }
);

export const receiveSingleMonth = (month) => (
  {
    type: RECEIVE_SINGLE_MONTH,
    month
  }
);

export const requestAllMonths = () => dispatch => (
  APIUtil.fetchAllMonths().then(months => (dispatch(receiveAllMonths(months)))
));

export const requestSingleMonth = (id) => dispatch => (
  APIUtil.fetchSingleMonth(id).then(month => (dispatch(receiveSingleMonth(month)))
));
