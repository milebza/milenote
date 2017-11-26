import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header className="header">
    <h1 className="header__title">milenote</h1>
    <button onClick={startLogout}>Logout</button>
    <nav className="row header__nav">
      <NavLink to="/dashboard" activeClassName="header__link--active" className="col col-xs-4 header__link"><span className="icon icon-list2"></span></NavLink>
      <NavLink to="/add" activeClassName="header__link--active" className="col col-xs-4 header__link"><span className="icon icon-file-text2"></span></NavLink>
      <NavLink to="/info" activeClassName="header__link--active" className="col col-xs-4 header__link"><span className="icon icon-info"></span></NavLink>
    </nav>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
