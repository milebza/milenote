import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import notesReducer from '../reducers/notes.js'
import filtersReducer from '../reducers/filters.js'
// thunk will allow redux to return functions and not only objects
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
