import React from 'react'
import NoteList from './NoteList'
import NoteListFilters from './NoteListFilters'

const DashboardPage = () => (
  <div className="grey-page">
    <NoteListFilters />
    <NoteList />
  </div>
)

export default DashboardPage
