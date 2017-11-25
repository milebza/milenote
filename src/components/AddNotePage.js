import React from 'react'
import { connect } from 'react-redux'
import { startAddNote } from '../actions/notes'
import NoteForm from './NoteForm'

export class AddNotePage extends React.Component {
  onSubmit = (note) => {
    this.props.startAddNote(note)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <NoteForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: (note) => dispatch(startAddNote(note))
})

export default connect(undefined, mapDispatchToProps)(AddNotePage)
