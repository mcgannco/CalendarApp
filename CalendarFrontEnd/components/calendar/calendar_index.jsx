import React from 'react';
import { Link } from 'react-router-dom';
import CalendarIndexItem from './calendar_index_item';

class CalendarIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllMonths().then(this.props.requestAllEvents())
  }

  render() {
    const { months, currentUser, events } = this.props;
    if (!currentUser) {
      return <div className="main-logo">
        <span>
          <i className="far fa-calendar-alt">
          </i>
        </span>
      </div>;
    }
      return(
          <div className="months-container">
            <ul>
              {months.map(month => <CalendarIndexItem events={events} currentUser={currentUser} key={month.name} month={month}/>)}
            </ul>
        </div>
      )
    }
  }


export default CalendarIndex;
