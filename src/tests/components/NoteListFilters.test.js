import React from 'react'
import { shallow } from 'enzyme'
import { NoteListFilters } from '../../components/NoteListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <NoteListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render NoteListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render NoteListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'f'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
  const calendarFocused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
