import React from 'react'
import { shallow } from 'enzyme'
import { EditNotePage } from '../../components/EditNotePage'
import notes from '../fixtures/notes'

let note, editNote, removeNote, history, wrapper

beforeEach(() => {
  note = notes[0]
  editNote = jest.fn()
  removeNote = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<EditNotePage note={notes[0]} history={history} editNote={editNote} removeNote={removeNote} />)
})

test('should render EditNotePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle removeNote', () => {
  wrapper.find('button').at(0).simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeNote).toHaveBeenLastCalledWith({id: notes[0].id})
})

test('should handle change to edit view', () => {
  expect(wrapper).toMatchSnapshot()
  wrapper.find('button').at(1).simulate('click')
  expect(wrapper).toMatchSnapshot()
})

test('should handle editNote', () => {
  wrapper.find('button').at(1).simulate('click')
  wrapper.find('NoteForm').prop('onSubmit')(notes[0])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editNote).toHaveBeenLastCalledWith(notes[0].id, notes[0])
})
