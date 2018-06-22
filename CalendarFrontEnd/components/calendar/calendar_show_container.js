import { connect } from 'react-redux';
import { requestSingleMonth } from '../../actions/calendar_actions';
import { requestAllEvents } from '../../actions/event_actions';
import CalendarShow from './calendar_show';

const msp = state => {
  return({
    currentUser: state.entities.users[state.session.id],
    month: state.ui.currentMonth,
  })
};

const mdp = dispatch => {
  return({
    requestSingleMonth: (id) => dispatch(requestSingleMonth(id)),
    requestAllEvents: () => dispatch(requestAllEvents())
  })
};

export default connect(msp, mdp)(CalendarShow);
