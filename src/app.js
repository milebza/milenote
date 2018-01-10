import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './router/AppRouter'
import LoadingPage from './components/LoadingPage'
import configureStore from './store/configureStore'
import { startSetNotes } from './actions/notes'
import { login, logout } from './actions/auth'

import 'react-dates/lib/css/_datepicker.css'
import './styles/style.scss'

import { firebase } from './firebase/firebase'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

// When the page first loads
// or the auth state changes
// this will automatically trigger
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    // Fetch notes
    store.dispatch(startSetNotes()).then(() => {
      renderApp()
      // If in login page redirect to dashboard page
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
