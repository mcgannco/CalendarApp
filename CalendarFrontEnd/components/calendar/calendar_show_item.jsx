import React from 'react';
import { Link } from 'react-router-dom';

class CalendarShowItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startingPoints: {'January': 2, 'February': 5, 'March': 5,
      'April': 1, 'May': 3, 'June': 6, 'July': 1, 'August': 4, 'September': 7,
    'October': 2, 'November': 5, 'December': 7},
    endingPoints: {'January': 32, 'February': 32, 'March': 35,
    'April': 30, 'May': 33, 'June': 35, 'July': 31, 'August': 34, 'September': 36,
  'October': 32, 'November': 34, 'December': 37}

    }
    this.drawCal = this.drawCal.bind(this)
  }

  drawCal() {
    let month = this.props.month.name
    let days = this.props.month.days
    let start = this.state.startingPoints[month]
    let end = this.state.endingPoints[month]

    let hash = {"one": [], "two": [], "three": [], "four": [], "five": [], "six": []}
    for (let i = 1; i < 43; i++) {
    let  num = days[i - start];
    let  day = days[i];
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
          hash["one"].push(<td id={day} key={day}>{num}</td>)
        } else if (i >= 8 && i < 15) {
          hash["two"].push(<td id={day} key={day}>{num}</td>)
        } else if (i >= 15 && i < 22) {
          hash["three"].push(<td id={day} key={day}>{num}</td>)
        } else if (i >= 22 && i < 29) {
          hash["four"].push(<td id={day} key={day}>{num}</td>)
        } else if (i >= 29 && i < 36) {
          hash["five"].push(<td id={day} key={day}>{num}</td>)
        } else if (i >= 36 && i < 43) {
          hash["six"].push(<td id={day} key={day}>{num}</td>)
        }
      }
   }

   return hash;
 }

  render() {
    if (!this.props.currentUser) {
      return null;
    }
      let {month} = this.props;
      let weeks = this.drawCal();
      let week1 = weeks["one"]
      let week2 = weeks["two"]
      let week3 = weeks["three"]
      let week4 = weeks["four"]
      let week5 = weeks["five"]
      let week6 = weeks["six"]
      return(
          <div className="individual-month-container">
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
      )
    }
  }


export default CalendarShowItem;