import { connect } from 'react-redux';
import { selectAllMonths } from '../../reducers/selectors';
import { requestAllMonths } from '../../actions/calendar_actions';
import { requestAllEvents } from '../../actions/event_actions';
import CalendarIndex from './calendar_index';

const msp = state => {
  let data;
  if (state.entities.users[state.session.id]) {
    data = state.entities.users[state.session.id].events
  } else {
    data = null;
  }
  return({
    currentUser: state.entities.users[state.session.id],
    months: selectAllMonths(state),
    events: data
  })
};

const mdp = dispatch => {
  return({
    requestAllMonths: () => dispatch(requestAllMonths()),
    requestAllEvents: () => dispatch(requestAllEvents())
  })
};

export default connect(msp, mdp)(CalendarIndex);
