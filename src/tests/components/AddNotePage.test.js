import React from 'react'
import { shallow } from 'enzyme'
import { AddNotePage } from '../../components/AddNotePage'
import notes from '../fixtures/notes'

let startAddNote, history, wrapper

beforeEach(() => {
  startAddNote = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddNotePage startAddNote={startAddNote} history={history} />)
})

test('should render AddNotePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('NoteForm').prop('onSubmit')(notes[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddNote).toHaveBeenLastCalledWith(notes[0])
})
