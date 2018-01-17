import React from 'react'
import { NavLink } from 'react-router-dom'
import NoteList from './NoteList'
import NoteListFilters from './NoteListFilters'

const DashboardPage = () => (
  <div className="grey-page dashboard-page">
    <NoteListFilters />
    <NoteList />
    <NavLink to="/add" className="dashboard-page__btn-add"><span className="icon icon-file-text2"></span></NavLink>
  </div>
)

export default DashboardPage
