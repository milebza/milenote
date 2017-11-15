import uuid from 'uuid'

// ADD_NOTE
export const addNote = ({ title = '', content = '',  date = 0 } = {}) => ({
  type: 'ADD_NOTE',
  Note: {
    id: uuid(),
    title,
    content,
    date
  }
})

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
