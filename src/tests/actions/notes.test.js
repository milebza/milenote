import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  startAddNote,
  addNote,
  editNote,
  startEditNote,
  removeNote,
  startRemoveNote,
  setNotes,
  startSetNotes } from '../../actions/notes'
import notes from '../fixtures/notes'
import database from '../../firebase/firebase'

const uid = 'test-uid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const notesData = {}
  notes.forEach(({ id, title, content, date }) => {
    notesData[id] = { title, content, date }
  })
  database.ref(`users/${uid}/notes`).set(notesData).then(() => done())
})

test('should generate remove note action object', () => {
  const action = removeNote({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_NOTE',
    id: '123abc'
  })
})

test('should edit note from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = notes[0].id
  const updates = {
    title: 'Untitled'
  }
  store.dispatch(startEditNote(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_NOTE',
      id,
      updates
    })
    return database.ref(`users/${uid}/notes/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val().title).toBe(updates.title)
    done()
  })
})

test('should remove note from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = notes[2].id

  store.dispatch(startRemoveNote({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_NOTE',
      id
    })
    return database.ref(`users/${uid}/notes/${id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
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
  const store = createMockStore(defaultAuthState)
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

    return database.ref(`users/${uid}/notes/${actions[0].note.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(noteData)
    done()
  })
})

test('should add note with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState)
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

    return database.ref(`users/${uid}/notes/${actions[0].note.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(noteDefault)
    done()
  })
})

test('should setup set notes action object with data', () => {
  const action = setNotes(notes)
  expect(action).toEqual({
    type: 'SET_NOTES',
    notes
  })
})

test('should fetch notes from firebase', (done) => {
  const store = createMockStore(defaultAuthState)

  store.dispatch(startSetNotes()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_NOTES',
      notes
    })
    done()
  })
})
