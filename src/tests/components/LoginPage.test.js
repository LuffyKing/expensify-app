import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

let wrapper, startLogin;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin}></LoginPage>);

});

test('should render login page',() => {
  expect(wrapper).toMatchSnapshot();
});
test('should call startLogin',() => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
