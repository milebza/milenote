import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import { addNote } from './actions/notes'
import { setTextFilter } from './actions/filters'

import 'baseguide/scss/baseguide.scss'
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
