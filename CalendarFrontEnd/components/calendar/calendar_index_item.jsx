import React from 'react';
import { Link } from 'react-router-dom';

class CalendarIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.weekOne = this.weekOne.bind(this)
    this.weekTwo = this.weekTwo.bind(this)
    this.weekThree = this.weekThree.bind(this)
    this.weekFour = this.weekFour.bind(this)
  }

  weekOne() {
   let row = []
   for (let i = 1; i < 8; i++) {
     row.push(<td key={i}>{i}</td>)
   }
   return row;
 }

 weekTwo() {
  let row = []
  for (let i = 8; i < 15; i++) {
    row.push(<td key={i}>{i}</td>)
  }
  return row;
}

weekThree() {
 let row = []
 for (let i = 15; i < 22; i++) {
   row.push(<td key={i}>{i}</td>)
 }
 return row;
}

weekFour() {
 let row = []
 for (let i = 22; i < 29; i++) {
   row.push(<td key={i}>{i}</td>)
 }
 return row;
}

  render() {
    if (!this.props.currentUser) {
      return null;
    }
      let {month} = this.props;
      let week1 = this.weekOne();
      let week2 = this.weekTwo();
      let week3 = this.weekThree();
      let week4 = this.weekFour();

      return(
        <li>
          <div className="month-container">
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
             </tbody>
           </table>
          </div>
        </li>
      )
    }
  }


export default CalendarIndexItem;
