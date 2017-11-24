import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should generate default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set text filter', () => {
  const text = 'orange'
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
})

test('should set start date filter', () => {
  const startDate = moment()
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

test('should set end date filter', () => {
  const endDate = moment()
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})
