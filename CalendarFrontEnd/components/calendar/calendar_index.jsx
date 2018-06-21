import React from 'react';
import { Link } from 'react-router-dom';
import CalendarIndexItem from './calendar_index_item';

class CalendarIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllMonths()
  }

  render() {
    const { months } = this.props;
      return(
        <div>
          All the months
          <div className="months-container">
            <ul>
              {months.map(month => <CalendarIndexItem key={month.name} month={month}/>)}
            </ul>
          </div>
        </div>
      )
    }
  }


export default CalendarIndex;
