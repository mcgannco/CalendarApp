import { connect } from 'react-redux';
import { selectAllMonths } from '../../reducers/selectors';
import { requestAllMonths } from '../../actions/calendar_actions';
import CalendarIndex from './calendar_index';

const msp = state => {
  return({
    currentUser: state.entities.users[state.session.id],
    months: selectAllMonths(state),
  })
};

const mdp = dispatch => {
  return({
    requestAllMonths: () => dispatch(requestAllMonths())
  })
};

export default connect(msp, mdp)(CalendarIndex);
