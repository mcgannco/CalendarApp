import {connect} from 'react-redux';
import { login, receiveSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
  return({
    errors: state.errors.session,
    formType: 'signin',
  })
};

const mdp = dispatch => {
  return({
    processForm: (user) => dispatch(login(user)),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
  })
};

export default connect(msp, mdp)(SessionForm);
