import React from 'react';
import { Link } from 'react-router-dom';

class CalendarIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      let {month} = this.props
      if (month) {
        debugger
      }
      return(
        <li>
          <div className="month-container">
            <h1>{month.name}</h1>
          </div>
        </li>
      )
    }
  }


export default CalendarIndexItem;
