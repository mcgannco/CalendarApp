import {connect} from 'react-redux';
import { signup, receiveSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
  return({
    errors: state.errors.session,
    formType: 'signup',
  })
};

const mdp = dispatch => {
  return({
    processForm: (user) => dispatch(signup(user)),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
  })
};

export default connect(msp, mdp)(SessionForm);
