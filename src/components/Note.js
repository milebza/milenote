import React from 'react';

const Note = ({title, content}) => (
  <div className="form padding-075">
    <h3 className="note-info__title">{title}</h3>
    <textarea
      disabled
      className="form__input note-info__content"
      rows="20"
      value={content}
    />
  </div>
)

export default Note
