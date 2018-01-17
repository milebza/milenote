import React from 'react'
import { connect } from 'react-redux'
import { startAddNote } from '../actions/notes'
import NoteForm from './NoteForm'

export class AddNotePage extends React.Component {
  onSubmit = (note) => {
    this.props.startAddNote(note).then((id) => this.props.history.push(`/edit/${id}`))
  }
  render() {
    return (
      <div className="grey-page">
        <div className="container-sml">
          <NoteForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddNote: (note) => dispatch(startAddNote(note))
})

export default connect(undefined, mapDispatchToProps)(AddNotePage)
