import React from 'react'
import { shallow } from 'enzyme'
import { NoteListItem } from '../../components/NoteListItem'
import notes from '../fixtures/notes'

let removeNote, note, wrapper

beforeEach(() => {
  removeNote = jest.fn()
  note = notes[0]
  wrapper = shallow(<NoteListItem {...note} removeNote={removeNote} />)
})

test('should render NoteListItem correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle removeNote', () => {
  wrapper.find('button').simulate('click')
  expect(removeNote).toHaveBeenLastCalledWith({id: notes[0].id})
})
