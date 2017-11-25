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

// EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})
