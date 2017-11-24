import { addNote, editNote, removeNote } from '../../actions/notes'

test('should generate remove note action object', () => {
  const action = removeNote({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_NOTE',
    id: '123abc'
  })
})

test('should generate edit note action object', () => {
  const action = editNote('123abc', { content: 'New content' })
  expect(action).toEqual({
    type: 'EDIT_NOTE',
    id: '123abc',
    updates: {
      content: 'New content'
    }
  })
})

// test('should generate add note action object with provided values', () => {
//   const note = {
//     title: 'Dummy note',
//     content: 'Dummy content',
//     date: 1000
//   }
//   const action = addNote(note)
//   expect(action).toEqual(
//     type: 'ADD_NOTE',
//     note: {
//       ...note,
//       id: expect.any(String)
//     }
//   )
// })
//
// test('should generate add note action object with default values', () => {
//   const action = addNote()
//   expect(action).toEqual(
//     type: 'ADD_NOTE',
//     note: {
//       id: expect.any(String),
//       title: '',
//       content: '',
//       date: 0
//     }
//   )
// })
