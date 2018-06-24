import * as APIUtil from '../util/event_api_util';
export const RECEIVE_ALL_EVENTS  = 'RECEIVE_ALL_EVENTS ';
export const RECEIVE_SINGLE_EVENT  = 'RECEIVE_SINGLE_EVENT ';
export const RECEIVE_EVENT_ERRORS  = 'RECEIVE_EVENT_ERRORS ';

export const receiveAllEvents = (events) => (
  {
    type: RECEIVE_ALL_EVENTS,
    events
  }
);

export const receiveSingleEvent = (event) => {
  return(
    {
      type: RECEIVE_SINGLE_EVENT,
      event
    }
  )
}

export const receiveEventErrors = (errors) => (
  {
    type: RECEIVE_EVENT_ERRORS,
    errors
  }
);

export const requestAllEvents = () => dispatch => (
  APIUtil.fetchAllEvents().then(events => dispatch(receiveAllEvents(events)))
)

export const createEvent = event => dispatch => {
  return(
    APIUtil.createEvent(event).then(event => dispatch(receiveSingleEvent(event)),
  err => dispatch(receiveEventErrors(err.responseJSON))));
};
