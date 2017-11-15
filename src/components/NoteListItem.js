import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeNote } from '../actions/notes'

const NoteListItem = ({dispatch, id, title, content, date }) => (
  <div className="row note-item">
    <Link className="col col-xs-11 note-item__content" to={`/edit/${id}`}>
      <div>
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__p">{content}</p>
        <small className="note-item__date">{moment(date).format("MMM Do YYYY")}</small>
      </div>
    </Link>
    <div className="col col-xs-1">
      <button className="btn-link note-item__btn-remove" onClick={() => {
        dispatch(removeNote({ id }))
      }}><span className="icon icon-bin"></span></button>
    </div>
  </div>
)

export default connect()(NoteListItem)
