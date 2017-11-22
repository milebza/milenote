import React from 'react'

const InfoPage = () => (
  <div className="info-page">
    <div className="flex">
      <div className="col col-xs-2 text-center"><span className="info-page__icon icon icon-list2"></span></div>
      <div className="col col-xs-10">
        <p className="info-page__description">See your list of notes. Click on a note to see its full content</p>
      </div>
    </div>
    <div className="flex">
      <div className="col col-xs-2 text-center"><span className="info-page__icon icon icon-search"></span></div>
      <div className="col col-xs-10">
        <p className="info-page__description">Search by whatever word you want</p>
        <p className="info-page__description">Use the calendar to filter by dates</p>
      </div>
    </div>
    <div className="flex">
      <div className="col col-xs-2 text-center"><span className="info-page__icon icon icon-file-text2"></span></div>
      <div className="col col-xs-10"><p className="info-page__description">Add a new note</p></div>
    </div>
    <div className="flex">
      <div className="col col-xs-2 text-center"><span className="info-page__icon icon icon-bin"></span></div>
      <div className="col col-xs-10">
        <p className="info-page__description">Remove a note</p>
      </div>
    </div>
    <div className="flex">
      <div className="col col-xs-2 text-center"><span className="info-page__icon icon icon-pacman"></span></div>
      <div className="col col-xs-10"><p className="info-page__description">Want to report a bug? <a className="info-page__link" href="https://github.com/milebza/milenote/issues" target="_blank">Talk to me</a></p></div>
    </div>
    <p className="info-page__credit text-center"><small>&copy; 2017 &mdash; <a className="info-page__credit-link" href="https://milebza.github.io/" target="_blank">Milena Baeza</a></small></p>
  </div>
)

export default InfoPage
