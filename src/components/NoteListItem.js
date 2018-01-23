import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startRemoveNote } from '../actions/notes'

export class NoteListItem extends React.Component {
  onRemove = () => {
    if (confirm('Trash it?')) {
      this.props.startRemoveNote({ id: this.props.id })
    }
  }
  render() {
    return (
      <div className="col col-md-4">
        <div className="note-item">
          <Link to={`/edit/${this.props.id}`}>
            <div className="note-item__content">
              <h3 className="note-item__title">{this.props.title}</h3>
              <p className="note-item__p">{this.props.content}</p>
            </div>
          </Link>
          <div className="note-item__details">
            <small className="note-item__grey">{moment(this.props.date).format("MMM Do YYYY")}</small>
            <small className="mobile-show note-item__grey note-item__dot">.</small>
            <small className="mobile-show note-item__grey" onClick={this.onRemove}>Delete</small>
            <button className="btn-link note-item__btn-remove mobile-hide" onClick={this.onRemove}><span className="icon icon-bin"></span></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveNote: (data) => dispatch(startRemoveNote(data))
})

export default connect(undefined, mapDispatchToProps)(NoteListItem)
