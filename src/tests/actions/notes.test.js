import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddNote, addNote, editNote, removeNote } from '../../actions/notes'
import notes from '../fixtures/notes'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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

test('should generate add note action object with provided values', () => {
  const action = addNote(notes[1])
  expect(action).toEqual({
    type: 'ADD_NOTE',
    note: notes[1]
  })
})

test('should add note to database and store', (done) => {
  const store = createMockStore({})
  const noteData = {
    title: 'Books',
    content: 'The Blind Assassin',
    date: 1000
  }

  store.dispatch(startAddNote(noteData)).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_NOTE',
      note: {
        id: expect.any(String),
        ...noteData
      }
    })

    return database.ref(`notes/${actions[0].note.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(noteData)
    done()
  })
})

test('should add note with defaults to database and store', (done) => {
  const store = createMockStore({})
  const noteDefault = {
    title: '',
    content: '',
    date: 0
  }

  store.dispatch(startAddNote({})).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_NOTE',
      note: {
        id: expect.any(String),
        ...noteDefault
      }
    })

    return database.ref(`notes/${actions[0].note.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(noteDefault)
    done()
  })
})

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
