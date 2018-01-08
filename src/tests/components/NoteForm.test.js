import moment from 'moment'
import React from 'react'
import { shallow } from 'enzyme'
import NoteForm from '../../components/NoteForm'
import notes from '../fixtures/notes'

test('should render NoteForm correctly', () => {
  const wrapper = shallow(<NoteForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render NoteForm with note data', () => {
  const wrapper = shallow(<NoteForm note={notes[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<NoteForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set title on input change', () => {
  const value = 'New title'
  const wrapper = shallow(<NoteForm />)
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('title')).toBe(value)
})

test('should set content on textarea change', () => {
  const value = 'New content'
  const wrapper = shallow(<NoteForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('content')).toBe(value)
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<NoteForm note={notes[0]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: notes[0].title,
    content: notes[0].content,
    date: expect.any(Number)
  })
})
