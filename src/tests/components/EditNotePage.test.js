import React from 'react'
import { shallow } from 'enzyme'
import { EditNotePage } from '../../components/EditNotePage'
import notes from '../fixtures/notes'

let note, startEditNote, startRemoveNote, history, wrapper

beforeEach(() => {
  note = notes[0]
  startEditNote = jest.fn()
  startRemoveNote = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditNotePage note={notes[0]} history={history} startEditNote={startEditNote} startRemoveNote={startRemoveNote} />)
})

test('should render EditNotePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle startRemoveNote', () => {
  wrapper.find('button').at(0).simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveNote).toHaveBeenLastCalledWith({id: notes[0].id})
})

test('should handle change to edit view', () => {
  expect(wrapper).toMatchSnapshot()
  wrapper.find('button').at(1).simulate('click')
  expect(wrapper).toMatchSnapshot()
})

test('should handle startEditNote', () => {
  expect(wrapper).toMatchSnapshot()
  wrapper.find('button').at(1).simulate('click')
  wrapper.find('NoteForm').prop('onSubmit')(notes[0])
  expect(startEditNote).toHaveBeenLastCalledWith(notes[0].id, notes[0])
  expect(wrapper).toMatchSnapshot()
})
