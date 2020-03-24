import {UsersActions} from './user.actions';

export const initialState = {}

export function userReducer(state = initialState, action: UsersActions) {

  switch (action.type) {

    case 'LOGIN':
      return {
        ...state,
        uid: action.payload
      };
  }
  return state;
}
