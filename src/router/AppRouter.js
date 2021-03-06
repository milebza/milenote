import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import EditNotePage from '../components/EditNotePage'
import AddNotePage from '../components/AddNotePage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/add" component={AddNotePage} />
        <PrivateRoute path="/edit/:id" component={EditNotePage} />
        <Route component={NotFoundPage} />
      </Switch>
  </Router>
)

export default AppRouter
