import React from 'react'
import { connect } from 'react-redux'
import NoteListItem from './NoteListItem'
import selectNotes from '../selectors/notes'

const NoteList = (props) => (
  <div>
    {props.notes.length === 0 && <p className="text-center no-result">No notes!</p>}
    {props.notes.map((note) => {
      return <NoteListItem key={note.id} {...note} />
    })}
  </div>
)

// What information from the store
// we want our component to access
const mapStateToProps = (state) => {
  return {
    notes: selectNotes(state.notes, state.filters)
  }
}

// connect() returns de hoc function
// so we invoque that function to get the hoc component
export default connect(mapStateToProps)(NoteList)
