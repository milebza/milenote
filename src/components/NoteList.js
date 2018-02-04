import React from 'react'
import { connect } from 'react-redux'
import NoteListItem from './NoteListItem'
import selectNotes from '../selectors/notes'

export const NoteList = (props) => (
  <div className="container">
    <div className="note-list">
      {props.notes.length === 0 ?
        (
          <p className="text-center no-result">No notes</p>
        ) :
        (
          <div className="row">
            {
              props.notes.map((note) => {
                  return <NoteListItem key={note.id} {...note} />
              })
            }
          </div>
        )
      }
    </div>
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
