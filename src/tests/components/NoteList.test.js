import React from 'react'
import { shallow } from 'enzyme'
import { NoteList } from '../../components/NoteList'
import notes from '../fixtures/notes'

test('should render NoteList with notes', () => {
  const wrapper = shallow(<NoteList notes={notes} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render NoteList with empty message', () => {
  const wrapper = shallow(<NoteList notes={[]} />)
  expect(wrapper).toMatchSnapshot()
})
