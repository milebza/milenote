import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters'

export class NoteListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  render() {
    return (
      <div className="row filters">
        <div className="col col-md-6 filters__search">
          <input className="form__input filters__search-input" type="text" value={this.props.filters.text} onChange={this.onTextChange} />
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

const mapStateToProps = (state) => ({ filters: state.filters })

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteListFilters)
