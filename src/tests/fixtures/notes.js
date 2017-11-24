import moment from 'moment'

export default [
  {
    id: '1',
    title: 'Letter',
    content: 'Dear friend',
    date: 0
  },
  {
    id: '2',
    title: 'Shopping list',
    content: 'oranges, lettuce',
    date: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    title: 'Movies',
    content: 'Pulp Fiction',
    date: moment(0).add(4, 'days').valueOf()
  }
]
