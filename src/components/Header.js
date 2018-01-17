import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="flex header__content-wrapper">
      <h1 className="header__title"><NavLink to="/" className="">milenote</NavLink></h1>
      <section>
        <NavLink to="/info" className="header__link"><span className="icon icon-info"></span></NavLink>
        <button className="header__logout-btn" onClick={startLogout}>Logout</button>
      </section>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
