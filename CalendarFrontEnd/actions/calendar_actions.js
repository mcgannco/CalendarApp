import * as APIUtil from '../util/calendar_api_util';
export const RECEIVE_ALL_MONTHS  = 'RECEIVE_ALL_MONTHS ';

export const receiveAllMonths = (months) => (
  {
    type: RECEIVE_ALL_MONTHS,
    months
  }
);

export const requestAllMonths = () => dispatch => (
  APIUtil.fetchAllMonths().then(months => dispatch(receiveAllMonths(months)))
)
