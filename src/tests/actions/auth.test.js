import {shallow} from 'enzyme';
import React from 'react';
import {login, logout} from '../../actions/auth';
/*
import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
  return ()=>{
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}

export const login = (uid) =>{
  return {
    type:'LOGIN',
    uid
  };
};
export const logout = (uid) =>{
  return {
    type:'LOGOUT'
  };
};

*/
test('should login', () => {
  const uid = '1234567';
  const action = login(uid);
  expect(action).toEqual({
    type:'LOGIN',
    uid
  });
});
test('should logout',() => {
  const uid = '1234567';
  const action = logout(uid);
  expect(action).toEqual({type:'LOGOUT'});
});
