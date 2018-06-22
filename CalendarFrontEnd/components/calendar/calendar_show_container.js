import { connect } from 'react-redux';
import { requestSingleMonth } from '../../actions/calendar_actions';
import { requestAllEvents } from '../../actions/event_actions';
import CalendarShow from './calendar_show';

const msp = state => {
  let data;
  if (state.entities.users[state.session.id]) {
    data = state.entities.users[state.session.id].events
  } else {
    data = null;
  }
  return({
    currentUser: state.entities.users[state.session.id],
    month: state.ui.currentMonth,
    events: data
  })
};

const mdp = dispatch => {
  return({
    requestSingleMonth: (id) => dispatch(requestSingleMonth(id)),
    requestAllEvents: () => dispatch(requestAllEvents())
  })
};

export default connect(msp, mdp)(CalendarShow);
