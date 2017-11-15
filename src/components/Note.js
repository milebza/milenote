import React from 'react';

const Note = ({title, content}) => (
  <div className="form padding-075">
    <h3 className="note-info__title">{title}</h3>
    <p className="note-info__p">{content}</p>
  </div>
)

export default Note
