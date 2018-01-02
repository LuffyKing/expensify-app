import {shallow} from 'enzyme';
import React from 'react';
import LoadingPage from '../../components/LoadingPage';
test('should render Header correctly', () => {
  const wrapper = shallow(<LoadingPage></LoadingPage>);
  expect(wrapper).toMatchSnapshot();
});
