import { FIND_USER } from '../actions/userActions';

export const initialState = {
  users: []
};

export default userReducer(state = initialState, action) {
  const { users } = state;
  switch (action.type) {
    case FIND_USER:
      return {
        ...state,
        users: [...users, action.payload]
      }
      
    default:
      return state
  }
}