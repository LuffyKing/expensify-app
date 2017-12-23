import React from 'react';
import {shallow} from 'enzyme';
import Comp404 from '../../components/Comp404';

test('Should test 404-page',() => {
  const wrapper = shallow(<Comp404></Comp404>);
  expect(wrapper).toMatchSnapshot();
});
