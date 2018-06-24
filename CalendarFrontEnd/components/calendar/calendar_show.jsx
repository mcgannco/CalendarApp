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
    selectedDay: "",
    eventFormOpen: false,
    eventEditFormOpen: false,
    startTime: "",
    endTime: "",
    event: "",
    description: "",
    }
    this.drawCal = this.drawCal.bind(this)
    this.openEvents = this.openEvents.bind(this)
    this.closeEvents = this.closeEvents.bind(this)
    this.openEventForm = this.openEventForm.bind(this)
    this.createEvent = this.createEvent.bind(this)
    this.destroyEvent = this.destroyEvent.bind(this)
    this.updateEvent = this.updateEvent.bind(this)
    this.changeEvent = this.changeEvent.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.setStartTime = this.setStartTime.bind(this)
    this.setEndTime = this.setEndTime.bind(this)
    this.convertTime = this.convertTime.bind(this)
  }

  componentDidMount() {
    this.props.requestSingleMonth(this.props.match.params.monthId).then(this.props.requestAllEvents());
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
    this.setState({eventsShow: false, selectedDay: "", eventFormOpen: false})
  }

  openEventForm(e) {
    e.preventDefault()
    this.setState({eventFormOpen: true})
  }

  createEvent(e) {
    let {createEvent, currentUser, month} = this.props;
    createEvent({event: {user_id: parseInt(currentUser.id), month_id: parseInt(month.id),
      day_id: parseInt(this.state.selectedDay), description: this.state.description, start_time: this.state.startTime, end_time: this.state.endTime
     }}).then(this.setState({startTime: "", endTime: "", description: "",eventFormOpen: false}))
  }

  updateDescription(e) {
    const description = e.target.value ? e.target.value : "";
        this.setState({ description });
  }

  setStartTime(e) {
    const startTime = e.target.value ? e.target.value : "";
        this.setState({ startTime });
  }

  setEndTime(e) {
    const endTime = e.target.value ? e.target.value : "";
        this.setState({ endTime });
  }

  destroyEvent(e) {
    this.props.deleteEvent(e.currentTarget.id)
  }

  changeEvent(event) {
    this.setState({eventEditFormOpen: true, description: event.description, startTime: event.start_time, endTime: event.end_time, event: event} )
  }

  updateEvent(e) {
    let {updateEvent, currentUser, month} = this.props;
    updateEvent({id: this.state.event.id, user_id: parseInt(currentUser.id), month_id: parseInt(month.id),
      day_id: parseInt(this.state.selectedDay), description: this.state.description, start_time: this.state.startTime, end_time: this.state.endTime
    }).then(this.setState({event: "", description: "", startTime: "", endTime: "", eventEditFormOpen: false}))
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
    let events = this.props.events.filter(event => event.month_id === this.props.month.id)
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
      let eventForm;

      if(this.state.eventFormOpen) {
        eventForm = <div className="event-form">
          <h1>Create Event</h1>
          <input onChange={this.updateDescription}className="description"placeholder="Enter Description"></input>
          <div className="time"><p>Start</p><input onChange={this.setStartTime} id="time" type="time"></input></div>
          <div className="time"><p>End</p><input onChange={this.setEndTime} id="time" type="time"></input></div>
          <div className="create-button"><button onClick={this.createEvent}>Create</button></div>
        </div>
      }

      if(this.state.eventEditFormOpen) {
        eventForm = <div className="event-form">
          <h1>Edit Event</h1>
          <input onChange={this.updateDescription}className="description"value={this.state.description}></input>
          <div className="time"><p>Start</p><input onChange={this.setStartTime} value={this.state.startTime} id="time" type="time"></input></div>
          <div className="time"><p>End</p><input onChange={this.setEndTime} value={this.state.endTime} id="time" type="time"></input></div>
          <div className="create-button"><button onClick={this.updateEvent}>Update</button></div>
        </div>
      }

      if (this.state.eventsShow) {
        let day;
        for (let i = 0; i < month.days.length; i++) {
          if(this.state.selectedDay === month.days[i].id) {
            day = month.days[i].num
            break
          }
        }
        let events = this.props.events.filter(event => event.day_id === this.state.selectedDay)
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
                <nav id={event.id} onClick={this.destroyEvent}><i className="far fa-window-close"></i></nav>
                <nav id={event.id} onClick={() => this.changeEvent(event)}><i className="fa fa-edit"></i></nav>
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
            <div onClick={this.openEventForm} className="add-event"><i className="fa fa-plus"></i></div>
          <ul>
            {eventList}
          </ul>
          {eventForm}
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
