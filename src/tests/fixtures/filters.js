import moment from 'moment'

const filters = {
  text: '',
  startDate: null,
  endDate: null
}

const altFilters = {
  text: 'letter',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}

export { filters, altFilters }
