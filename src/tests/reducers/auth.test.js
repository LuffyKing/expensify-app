
import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = '123456';
  const action = {
    type:'LOGIN',
    uid
  };
  const state = authReducer({uid},action);
  expect(state.uid).toEqual(action.uid);
});
test('should clear uid  on logout', () => {
  const uid = '123456';
  const action = {
    type:'LOGOUT'
  };
  const state = authReducer({uid}, action);
  expect(state).toEqual({});

})
