import React from 'react'
import { connect } from 'react-redux'
import { editNote, removeNote } from '../actions/notes'
import Note from './Note'
import NoteForm from './NoteForm'

class EditNotePage extends React.Component {
  state = {
    editView: false
  }
  render() {
    return (
      <div className="relative">
        <button className="btn-link btn--left"
          onClick={() => {
          this.props.dispatch(removeNote({ id: this.props.note.id }))
          this.props.history.push('/')
        }}><span className="icon icon-bin"></span> Remove</button>

        {!this.state.editView &&
          <button className="btn-link form__btn form__btn-edit"
            onClick={() => {
              this.setState((prevState) => ({ editView: true }))
          }}><span className="icon icon-pencil"></span> Edit</button>
        }

        {this.state.editView ?
          <NoteForm
            note={this.props.note}
            onSubmit={(note) => {
              this.props.dispatch(editNote(this.props.note.id, note))
              this.props.history.push('/')
            }} />
          :
          <Note {...this.props.note} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
                                                // get id from url
    note: state.notes.find((note) => note.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditNotePage)
