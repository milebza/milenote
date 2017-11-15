import React from 'react'
import NoteList from './NoteList'
import NoteListFilters from './NoteListFilters'

const DashboardPage = () => (
  <div>
    <NoteListFilters />
    <NoteList />
  </div>
)

export default DashboardPage
