import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  // when destructuring an object
  // ... will get all the other properties in it
  // and store them in a variable
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div className="container">
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)
