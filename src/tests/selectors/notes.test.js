import selectNotes from '../../selectors/notes'
import moment from 'moment'
import notes from '../fixtures/notes'

test('should filter by text value', () => {
  const filters = {
    text: 'f',
    startDate: null,
    endDate: null
  }
  const result = selectNotes(notes, filters)
  expect(result).toEqual([ notes[2], notes[0] ])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    startDate: moment(0),
    endDate: null
  }
  const result = selectNotes(notes, filters)
  expect(result).toEqual([ notes[2], notes[0] ])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    startDate: null,
    endDate: moment(0).add(2, 'days')
  }
  const result = selectNotes(notes, filters)
  expect(result).toEqual([ notes[0], notes[1] ])
})
