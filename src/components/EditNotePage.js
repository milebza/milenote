import React from 'react'
import { connect } from 'react-redux'
import { editNote, removeNote } from '../actions/notes'
import Note from './Note'
import NoteForm from './NoteForm'

export class EditNotePage extends React.Component {
  state = {
    editView: false
  }
  onSubmit = (note) => {
    this.props.editNote(this.props.note.id, note)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeNote({ id: this.props.note.id })
    this.props.history.push('/')
  }
  handleEditView = () => {
    this.setState((prevState) => ({ editView: true }))
  }
  render() {
    return (
      <div className="relative">
        <button className="btn-link btn--left"
          onClick={this.onRemove}><span className="icon icon-bin"></span> Remove</button>

        {
          this.state.editView ?
          (
            <NoteForm
              note={this.props.note}
              onSubmit={this.onSubmit} />
          ) :
          (
            <div>
              <button className="btn-link form__btn form__btn-edit"
                onClick={this.handleEditView}><span className="icon icon-pencil"></span> Edit</button>
              <Note {...this.props.note} />
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({ note: state.notes.find((note) => note.id === props.match.params.id) })

const mapDispatchToProps = (dispatch) => ({
  editNote: (id, note) => dispatch(editNote(id, note)),
  removeNote: (data) => dispatch(removeNote(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage)
