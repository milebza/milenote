import uuid from 'uuid'
import database from '../firebase/firebase'

// components calls action generator
// action generator returns function
// component dispatches function
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_NOTE
export const addNote = (note) => ({
  type: 'ADD_NOTE',
  note
})

export const startAddNote = (noteData = {}) => {
  // this function only works due to thunk
  // it gets called internally by redux
  return (dispatch) => {
    // default data
    const {
      title = '',
      content = '',
      date = 0
    } = noteData
    const note = {title, content, date}

    return database.ref('notes').push(note).then((ref) => {
      dispatch(addNote({
        id: ref.key,
        ...note
      }))
    })
  }
}

// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
})

export const startRemoveNote = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`notes/${id}`).remove().then(() => {
      dispatch(removeNote({ id }))
    })
  }
}

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})

export const startEditNote = (id, updates) => {
  return (dispatch) => {
    return database.ref(`notes/${id}`).update(updates).then(() => {
      dispatch(editNote(id, updates))
    })
  }
}

// SET_NOTES
export const setNotes = (notes) => ({
  type: 'SET_NOTES',
  notes
})

export const startSetNotes = () => {
  return (dispatch) => {
    return database.ref('notes').once('value').then((snapshot) => {
      const notes = []

      snapshot.forEach((childSnapshot) => {
        notes.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setNotes(notes))
    })
  }
}
