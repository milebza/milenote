import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import EditNotePage from '../components/EditNotePage'
import AddNotePage from '../components/AddNotePage'
import InfoPage from '../components/InfoPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/info" component={InfoPage} />
        <Route path="/add" component={AddNotePage} />
        <Route path="/edit/:id" component={EditNotePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
