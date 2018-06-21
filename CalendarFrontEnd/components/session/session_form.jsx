import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(e) {
    if (e.currentTarget.id === "username") {
      this.setState({username: e.currentTarget.value})
    } else {
      this.setState({password: e.currentTarget.value})
    }
  }

  handleSubmit(e) {
    const { processForm } = this.props;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    processForm(user);
  }

  render() {
    let {formType} = this.props;
    let formName;
    let otherForm;
    let altLink;
    if (!formType) {
      return null
    }
    if (formType === "signup") {
      formName = <div>Signup</div>
      altLink = "/signin"
      otherForm = "Signin"
    } else if (formType === "signin") {
      formName = <div>Sign In</div>
      altLink = "/signup"
      otherForm = "Signup"
    }
    return(
      <div className="session-container">
        <div className="session">
          <h3>{formName}</h3>
          <input id="username" placeholder= "Enter Username" onChange={this.updateInput} value={this.state.username}></input>
          <input id="password" placeholder= "Enter Password" onChange={this.updateInput} value={this.state.password}></input>
          <button onClick={this.handleSubmit}>{formName}</button>
          <Link to={altLink}>{otherForm} instead</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
