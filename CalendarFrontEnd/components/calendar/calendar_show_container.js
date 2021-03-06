import { connect } from 'react-redux';
import { requestSingleMonth } from '../../actions/calendar_actions';
import { requestAllEvents, createEvent, deleteEvent, updateEvent, clearEventErrors } from '../../actions/event_actions';
import { selectAllEvents } from '../../reducers/selectors';
import CalendarShow from './calendar_show';

const msp = state => {
  let data;
  if (state.session.id) {
    data = selectAllEvents(state).filter(event => event.user_id === state.session.id)
  } else {
    data = null;
  }

  return({
    currentUser: state.entities.users[state.session.id],
    month: state.ui.currentMonth,
    events: data,
    errors: state.errors.events
  })
};

const mdp = dispatch => {
  return({
    requestSingleMonth: (id) => dispatch(requestSingleMonth(id)),
    requestAllEvents: () => dispatch(requestAllEvents()),
    createEvent: (event) => dispatch(createEvent(event)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    clearEventErrors: () => dispatch(clearEventErrors())
  })
};

export default connect(msp, mdp)(CalendarShow);
