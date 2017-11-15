import { createStore, combineReducers } from 'redux'
import notesReducer from '../reducers/notes.js'
import filtersReducer from '../reducers/filters.js'

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
