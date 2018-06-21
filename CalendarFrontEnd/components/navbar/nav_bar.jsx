import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.demo = this.demo.bind(this)
  }

  demo() {
    this.props.login({username: "DemoUser", password: 123456})
  }

  render() {
    const {currentUser, logout} = this.props
    let loggedin;
    let userDropDown;
    if (!currentUser) {
      loggedin = <div className="options">
        <Link to='/signin'>Sign In</Link>
        <button onClick={this.demo}>Demo</button>
      </div>
      } else {
        loggedin = <div className="user-profile-div">
          <span>
            {currentUser.username}
          </span>
          <button onClick={() => this.props.logout()}>Sign Out</button>
        </div>
      }
      return(
        <header className="main-nav">
          <nav className="left-nav">
            <ul>
              <li>
                <Link to="/"><p>Calendar App 2018</p></Link>
                <span><i className="far fa-calendar-alt"></i>
                </span>
                <nav className="hometext">Calender Home</nav>
              </li>
            </ul>
            {loggedin}

          </nav>
        </header>
      )
    }
  }


export default NavBar;
