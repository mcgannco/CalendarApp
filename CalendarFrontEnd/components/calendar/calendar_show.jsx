import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class CalendarShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestSingleMonth(this.props.match.params.monthId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.monthId !== nextProps.match.params.monthId) {
      this.props.requestSingleMonth(nextProps.match.params.monthId);
    }
  }

  render() {
    let {month} = this.props
    if (!month) {
      return null;
    }
      return(
          <div className="months-container">
            <h1>{month.name}</h1>
        </div>
      )
    }
  }


export default CalendarShow;
