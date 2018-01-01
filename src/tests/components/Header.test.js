import {shallow} from 'enzyme';
import React from 'react';
import {Header} from '../../components/Header';
let wrapper, startLogout;
beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout}></Header>);
});
test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();

  // expect(wrapper.find('h1').text()).toBe('Expensify');
  //  const renderer = new ReactShallowRenderer();
  //  renderer.render(<Header></Header>);
  //  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
test('should call startLogout',() => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
})
