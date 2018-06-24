import { connect } from 'react-redux';
import { selectAllMonths, selectAllEvents } from '../../reducers/selectors';
import { requestAllMonths } from '../../actions/calendar_actions';
import { requestAllEvents } from '../../actions/event_actions';
import CalendarIndex from './calendar_index';

const msp = state => {
  let data;
  if (state.session.id) {
    data = selectAllEvents(state).filter(event => event.user_id === state.session.id)
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
