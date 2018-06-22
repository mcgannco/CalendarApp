import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CalendarShowItem from './calendar_show_item';

class CalendarShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestSingleMonth(this.props.match.params.monthId).then(this.props.requestAllEvents());
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.monthId !== nextProps.match.params.monthId) {
      this.props.requestSingleMonth(nextProps.match.params.monthId).then(this.props.requestAllEvents());
    }
  }

  render() {
    let {month, currentUser} = this.props
    if (!month) {
      return null;
    }
      return(
          <div className="calendar-show-container">
            <div className="calendar-show">
                  <CalendarShowItem currentUser={currentUser} key={month.name} month={month}/>
            </div>

            <div className="events-container">
              <h1>{currentUser.username}s Events {month.name} {month.year}</h1>
            </div>

          </div>
      )
    }
  }


export default CalendarShow;
