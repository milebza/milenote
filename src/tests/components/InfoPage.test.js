import React from 'react'
import { shallow } from 'enzyme'
import InfoPage from '../../components/InfoPage'

test('should render InfoPage correctly', () => {
  const wrapper = shallow(<InfoPage />)
  expect(wrapper).toMatchSnapshot()
})
