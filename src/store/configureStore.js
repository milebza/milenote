import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
// thunk will allow redux to return functions and not only objects
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notes'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
