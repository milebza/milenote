import React from 'react'
import { shallow } from 'enzyme'
import { NoteListItem } from '../../components/NoteListItem'
import notes from '../fixtures/notes'

let startRemoveNote, note, wrapper

beforeEach(() => {
  startRemoveNote = jest.fn()
  note = notes[0]
  wrapper = shallow(<NoteListItem {...note} startRemoveNote={startRemoveNote} />)
})

test('should render NoteListItem correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

// test('should handle startRemoveNote', () => {
//   wrapper.find('button').simulate('click')
//   expect(startRemoveNote).toHaveBeenLastCalledWith({id: notes[0].id})
// })
