import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <h1 className="header__title">milenote</h1>
    <nav className="row header__nav">
      <NavLink exact={true} to="/" activeClassName="header__link--active" className="col col-xs-4 header__link"><span className="icon icon-list2"></span></NavLink>
      <NavLink exact={true} to="/add" activeClassName="header__link--active" className="col col-xs-4 header__link"><span className="icon icon-file-text2"></span></NavLink>
      <NavLink exact={true} to="/info" activeClassName="header__link--active" className="col col-xs-4 header__link"><span className="icon icon-info"></span></NavLink>
    </nav>
  </header>
)

export default Header
