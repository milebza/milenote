import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
  <div className="login-page__background">
    <div className="login-page text-center">
      <h1 className="login-page__title">milenote</h1>
      <p className="login-page__m-text">Login or create an account by pressing<br/> the button below!</p>
      <button className="login-page__login-btn" onClick={startLogin}>Enter with Google</button>
      <p className="login-page__s-text"><small>At the moment it's only possible with<br/> a Google account</small></p>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
