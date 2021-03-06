import React from 'react'
import { connect } from 'react-redux'
import { startEditNote, startRemoveNote } from '../actions/notes'
import Note from './Note'
import NoteForm from './NoteForm'

export class EditNotePage extends React.Component {
  state = {
    editView: false
  }
  onSubmit = (note) => {
    this.props.startEditNote(this.props.note.id, note)
    this.handleEditView()
  }
  onRemove = () => {
    if (confirm('Trash it?')) {
      this.props.startRemoveNote({ id: this.props.note.id })
      this.props.history.push('/')
    }
  }
  handleEditView = () => {
    this.setState((prevState) => ({ editView: !prevState.editView }))
  }
  render() {
    return (
      <div className="relative grey-page">
        <div className="container-sml">
          <button className="btn-link note-info__btn-delete"
            onClick={this.onRemove}><span className="note-info__dot mobile-hide">|</span><span> Delete</span></button>

          {
            this.state.editView ?
            (
              <NoteForm
                note={this.props.note}
                onSubmit={this.onSubmit} />
            ) :
            (
              <Note {...this.props.note} handleEditView={this.handleEditView} />
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({ note: state.notes.find((note) => note.id === props.match.params.id) })

const mapDispatchToProps = (dispatch) => ({
  startEditNote: (id, note) => dispatch(startEditNote(id, note)),
  startRemoveNote: (data) => dispatch(startRemoveNote(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage)
