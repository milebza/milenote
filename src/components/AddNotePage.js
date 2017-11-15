import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/notes'
import NoteForm from './NoteForm'

const AddNotePage = (props) => (
  <div>
    <NoteForm
      onSubmit={(note) => {
        props.dispatch(addNote(note))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddNotePage)
