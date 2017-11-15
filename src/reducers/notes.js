import moment from 'moment';
import uuid from 'uuid';

// Notes Reducer
const NotesReducerDefaultState = [{
  id: uuid(),
  title: 'My first note',
  content: 'Cum mazim nostro definitiones an, eam ei putent legendos, mei zril nominati praesent et. Eam tempor possim et. Inimicus honestatis eum at, ad fuisset nominavi quo, ea ridens fabellas vim. Ea hinc veniam salutandi sea, usu in iuvaret adversarium. Case munere gloriatur eu pro.',
  date: moment()
}]

export default (state = NotesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.Note
      ]
    case 'REMOVE_NOTE':
        return state.filter(({ id }) => (id !== action.id))
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          }
        }
        return note
      })
    default:
      return state
  }
}
