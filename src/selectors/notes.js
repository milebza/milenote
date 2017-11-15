import moment from 'moment'

// Get visible Notes
export default (notes, {text, startDate, endDate}) => {
  return notes.filter((note) => {
    const date = moment(note.date)
    const startDateMatch = startDate ? startDate.isSameOrBefore(date, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(date, 'day') : true
    const textMatch = note.title.toLowerCase().includes(text.toLowerCase()) || note.content.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    // 1 -> b will go first
    return a.date < b.date ? 1 : -1
  })
}
