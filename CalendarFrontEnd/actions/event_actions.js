import * as APIUtil from '../util/event_api_util';
export const RECEIVE_ALL_EVENTS  = 'RECEIVE_ALL_EVENTS ';

export const receiveAllEvents = (events) => (
  {
    type: RECEIVE_ALL_EVENTS,
    events
  }
);

export const requestAllEvents = () => dispatch => (
  APIUtil.fetchAllEvents().then(events => dispatch(receiveAllEvents(events)))
)
