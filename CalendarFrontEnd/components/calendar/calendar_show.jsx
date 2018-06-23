import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class CalendarShow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startingPoints: {'January': 2, 'February': 5, 'March': 5,
      'April': 1, 'May': 3, 'June': 6, 'July': 1, 'August': 4, 'September': 7,
    'October': 2, 'November': 5, 'December': 7},
    endingPoints: {'January': 32, 'February': 32, 'March': 35,
    'April': 30, 'May': 33, 'June': 35, 'July': 31, 'August': 34, 'September': 36,
  'October': 32, 'November': 34, 'December': 37},
  eventsShow: false,
  selectedDay: ""
    }
    this.drawCal = this.drawCal.bind(this)
    this.openEvents = this.openEvents.bind(this)
    this.closeEvents = this.closeEvents.bind(this)
    this.convertTime = this.convertTime.bind(this)
  }

  componentDidMount() {
    this.props.requestSingleMonth(this.props.match.params.monthId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.monthId !== nextProps.match.params.monthId) {
      this.props.requestSingleMonth(nextProps.match.params.monthId);
    }
  }

  openEvents(e) {
    e.preventDefault()
    this.setState({eventsShow: true, selectedDay: parseInt(e.currentTarget.id)})
  }

  closeEvents(e) {
    e.preventDefault()
    this.setState({eventsShow: false, selectedDay: ""})
  }

  convertTime(time) {
    if(time === "") {
      return "TBD"
    }
    let hours = parseInt(time.slice(0,2));
    let minutes = parseInt(time.slice(3,5));
    let zone = "am";

    if (hours > 12) {
        hours -= 12;
        zone = "pm";
    } else if (hours === 12) {
       zone = "pm";
    } else if (hours === 0) {
       hours = 12;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return `${hours}:${minutes} ${zone}`;
  }

  drawCal() {
    let month = this.props.month.name
    let days = this.props.month.days
    let events = this.props.currentUser.events.filter(event => event.month_id === this.props.month.id)
    let start = this.state.startingPoints[month]
    let end = this.state.endingPoints[month]
    let eventHash = {};

    for (let i = 0; i < events.length; i++) {
      if (eventHash[events[i].day_id]) {
        eventHash[events[i].day_id].push(events[i])
      } else {
        eventHash[events[i].day_id] = [events[i]]
      }
    }

    let hash = {"one": [], "two": [], "three": [], "four": [], "five": [], "six": []}
    for (let i = 1; i < 43; i++) {
    let  num = days[i - start];
    let  day = days[i - start];
      if (num) {
        num = num.num
      }
      if (day) {
        day = day.id
      }

      if (i < start) {
        hash["one"].push(<td id={`${month}:${i}`} key={`${month}:${i}`}></td>)
      } else if (i > end) {
        if (i < 36) {
          hash["five"].push(<td id={`${month}:${i}`} key={`${month}:${i}`}></td>)
        } else {
          hash["six"].push(<td id={`${month}:${i}`} key={`${month}:${i}`}></td>)
        }
      } else {
        if (i < 8) {
          if (eventHash[day]) {
            hash["one"].push(
              <td onClick={this.openEvents}id={day} className="has-event" key={day}>{num}<p className="event-count">{eventHash[day].length} events</p>
              </td>
            )
          } else {
            hash["one"].push(<td onClick={this.openEvents} id={day} key={day}>{num}<p className="event-count">No events</p></td>)
          }
        } else if (i >= 8 && i < 15) {
          if (eventHash[day]) {
            hash["two"].push(<td onClick={this.openEvents} id={day} className="has-event" key={day}>{num}<p className="event-count">{eventHash[day].length} events</p>
            </td>)
          } else {
            hash["two"].push(<td onClick={this.openEvents} id={day} key={day}>{num}<p className="event-count">No events</p></td>)
          }
        } else if (i >= 15 && i < 22) {
          if (eventHash[day]) {
            hash["three"].push(<td onClick={this.openEvents} id={day} className="has-event" key={day}>{num}<p className="event-count">{eventHash[day].length} events</p>
            </td>)
          } else {
            hash["three"].push(<td onClick={this.openEvents} id={day} key={day}>{num}<p className="event-count">No events</p></td>)
          }
        } else if (i >= 22 && i < 29) {
          if (eventHash[day]) {
            hash["four"].push(<td onClick={this.openEvents} id={day} className="has-event" key={day}>{num}<p className="event-count">{eventHash[day].length} events</p>
            </td>)
          } else {
            hash["four"].push(<td onClick={this.openEvents} id={day} key={day}>{num}<p className="event-count">No events</p></td>)
          }
        } else if (i >= 29 && i < 36) {
          if (eventHash[day]) {
            hash["five"].push(<td onClick={this.openEvents} id={day} className="has-event" key={day}>{num}<p className="event-count">{eventHash[day].length} events</p>
            </td>)
          } else {
            hash["five"].push(<td onClick={this.openEvents} id={day} key={day}>{num}<p className="event-count">No events</p></td>)
          }
        } else if (i >= 36 && i < 43) {
          if (eventHash[day]) {
            hash["six"].push(<td onClick={this.openEvents} id={day} className="has-event" key={day}>{num}<p className="event-count">{eventHash[day].length} events</p>
            </td>)
          } else {
            hash["six"].push(<td onClick={this.openEvents} id={day} key={day}>{num}<p className="event-count">No events</p></td>)
          }
        }
      }
   }

   return hash;
 }

  render() {
    let {month, currentUser} = this.props
    if (!month || !currentUser) {
      return null;
    }

      let weeks = this.drawCal();
      let week1 = weeks["one"]
      let week2 = weeks["two"]
      let week3 = weeks["three"]
      let week4 = weeks["four"]
      let week5 = weeks["five"]
      let week6 = weeks["six"]
      let eventDetail;

      if (this.state.eventsShow) {
        let day;
        for (let i = 0; i < month.days.length; i++) {
          if(this.state.selectedDay === month.days[i].id) {
            day = month.days[i].num
            break
          }
        }
        let events = currentUser.events.filter(event => event.day_id === this.state.selectedDay)
        let eventList;
        if (events.length < 1) {
          eventList = <li className="no-events">No Events Scheduled
            <span>
              <i className="far fa-calendar-alt"></i>
            </span>
          </li>
        } else {
          eventList = events.map(event => <li className="event-list-item" key={event.id}>

            <span>
              <div className="event-list-desc"><h3>Description:</h3> {event.description}</div>
              <div className="event-option-icons">
                <nav><i className="far fa-window-close"></i></nav>
                <nav><i class="fa fa-edit"></i></nav>
              </div>

            </span>

            <span>
              <div className="event-list-desc"><h3>Start:</h3> {this.convertTime(event.start_time)}</div>
            </span>

            <span>
              <div className="event-list-desc"><h3>End:</h3> {this.convertTime(event.end_time)}</div>
            </span>

          </li>)
        }
        eventDetail =   <div className="events-container">
            <div className="events-header">
              <span><p onClick={this.closeEvents}><i className="far fa-window-close"></i></p>
              <nav>{currentUser.username}s Events </nav><small>{month.name} {day}, {month.year}</small></span>
            </div>

          <ul>
            {eventList}
          </ul>

          </div>
      } else {
        eventDetail = null;
      }
      return(
          <div className="calendar-show-container">
              <div className="individual-month-container">
                <div className="month">
                  <h1>{month.name}</h1>
                    <table>
                     <thead>
                       <th>Sunday</th>
                       <th>Monday</th>
                       <th>Tuesday</th>
                       <th>Wednesday</th>
                       <th>Thursday</th>
                       <th>Friday</th>
                       <th>Saturday</th>
                     </thead>
                   <tbody>
                     <tr>
                       {week1}
                     </tr>
                     <tr>
                        {week2}
                     </tr>
                     <tr>
                        {week3}
                     </tr>
                     <tr>
                        {week4}
                     </tr>
                     <tr>
                        {week5}
                     </tr>
                     <tr>
                        {week6}
                     </tr>
                   </tbody>
                  </table>
                </div>
              </div>

                {eventDetail}

          </div>
      )
    }
  }


export default CalendarShow;
