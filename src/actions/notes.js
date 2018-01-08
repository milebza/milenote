import database from '../firebase/firebase'

// component calls action generator
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    // default data
    const {
      title = '',
      content = '',
      date = 0
    } = noteData
    const note = {title, content, date}

    return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
      const id = ref.key
      dispatch(addNote({
        id,
        ...note
      }))
      return id
    })
  }
}

// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
})

export const startRemoveNote = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/notes/${id}`).update(updates).then(() => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
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
