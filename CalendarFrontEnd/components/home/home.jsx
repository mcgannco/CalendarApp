import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    let layout;
      if(this.props.currentUser) {
        layout = <div>
          <h1>Welcome, {this.props.currentUser.username}</h1>
            <button onClick={() => this.props.logout()}>SignOut</button>
        </div>
      } else {
        layout = <div>
          <Link to='/signin'>SignIn</Link>
          <button onClick={this.demoLogin}>Demo</button>
        </div>
      }

      return(
        <div>
          {layout}
        </div>
      )
    }
  }


export default Home;
