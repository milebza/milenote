import React from 'react'
import moment from 'moment'

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.note ? props.note.title : '',
      content: props.note ? props.note.content : '',
      date: moment(),
      error: ''
    }
  }
  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onContentChange = (e) => {
    const content = e.target.value
    this.setState(() => ({ content }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.title && !this.state.content) {
      this.setState(() => ({ error: 'Type something!' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
        content: this.state.content,
        date: this.state.date.valueOf()
      })
    }
  }
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form__actions">
            <button className="btn-link form__btn"><span className="icon icon-checkmark"></span> Save</button>
            <p className="form__warning">{this.state.error && this.state.error}</p>
          </div>
          <hr className="mobile-show"></hr>
          <div className="form__input-wrapper">
            <input
              className="form__input form__input--title"
              type="text"
              placeholder="Note title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
            <textarea
              className="form__input"
              autoFocus
              placeholder="Start typing"
              rows="20"
              value={this.state.content}
              onChange={this.onContentChange}
            />
          </div>
        </form>
      </div>
    )
  }
}
