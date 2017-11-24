import notesReducer from '../../reducers/notes'
import notes from '../fixtures/notes'

test('should generate default state', () => {
  const state = notesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove note by id', () => {
  const action = {
    type: 'REMOVE_NOTE',
    id: notes[1].id
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual([ notes[0], notes[2] ])
})

test('should not remove note if id not found', () => {
  const action = {
    type: 'REMOVE_NOTE',
    id: '-1'
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual(notes)
})

test('should add note', () => {
  const note = {
    id: '123',
    title: 'Title',
    content: 'Content',
    date: 2000
  }
  const action = {
    type: 'ADD_NOTE',
    note
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual([...notes, note])
})

test('should edit note', () => {
  const content = 'dummy content'
  const action = {
    type: 'EDIT_NOTE',
    id: notes[1].id,
    updates: {
      content
    }
  }
  const state = notesReducer(notes, action)
  expect(state[1].content).toBe(content)
})

test('should not edit note if id not found', () => {
  const content = 'dummy content'
  const action = {
    type: 'EDIT_NOTE',
    id: '-1',
    updates: {
      content
    }
  }
  const state = notesReducer(notes, action)
  expect(state).toEqual(notes)
})
