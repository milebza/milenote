import React from 'react'
import { shallow } from 'enzyme'
import Note from '../../components/Note'
import notes from '../fixtures/notes'

test('shoud render Note with note content', () => {
  const wrapper = shallow(<Note {...notes[0]} />)
  expect(wrapper).toMatchSnapshot()
})
