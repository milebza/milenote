import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters'

class NoteListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    return (
      <div className="row filters">
        <div className="col col-md-6">
          <input className="form__input" type="text" placeholder="Search" value={this.props.filters.text} onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value))
          }} />
        </div>
        <div className="col col-md-6">
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(NoteListFilters)
