import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startRemoveNote } from '../actions/notes'

export class NoteListItem extends React.Component {
  onRemove = () => {
    this.props.startRemoveNote({ id: this.props.id })
  }
  render() {
    return (
      <div className="row note-item">
        <Link className="col col-xs-11 note-item__content" to={`/edit/${this.props.id}`}>
          <div>
            <h3 className="note-item__title">{this.props.title}</h3>
            <p className="note-item__p">{this.props.content}</p>
            <small className="note-item__date">{moment(this.props.date).format("MMM Do YYYY")}</small>
          </div>
        </Link>
        <div className="col col-xs-1">
          <button className="btn-link note-item__btn-remove" onClick={this.onRemove}><span className="icon icon-bin"></span></button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startRemoveNote: (data) => dispatch(startRemoveNote(data))
})

export default connect(undefined, mapDispatchToProps)(NoteListItem)
