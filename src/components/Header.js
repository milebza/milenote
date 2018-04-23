import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="flex header__content-wrapper">
      <NavLink to="/" className=""><h1 className="header__title">milenote</h1></NavLink>
      <section>
        <button className="header__logout-btn" onClick={startLogout}>Logout</button>
      </section>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
