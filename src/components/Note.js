import React from 'react';

const Note = ({title, content, handleEditView}) => (
  <div className="form">
    <div className="form__actions">
      <button className="btn-link form__btn form__btn-edit"
        onClick={handleEditView}><span className="icon icon-pencil"></span> Edit</button>
    </div>
    <hr className="mobile-show"></hr>
    <div className="note-info__wrapper">
      <h3 className="note-info__title">{title}</h3>
      <textarea
        disabled
        className="form__input note-info__content"
        rows="20"
        value={content}
      />
    </div>
  </div>
)

export default Note
