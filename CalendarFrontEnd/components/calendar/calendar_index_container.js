import { connect } from 'react-redux';
import CalendarIndex from './calendar_index';

const msp = state => {
  return({
    currentUser: state.entities.users[state.session.id]
  })
};

const mdp = dispatch => {
  return({
  })
};

export default connect(msp, mdp)(CalendarIndex);
