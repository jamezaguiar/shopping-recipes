import { User } from '../user.model';

export type AuthState = {
  user: User;
};

const initialState: AuthState = {
  user: null,
};

export function authReducer(state = initialState, action) {
  return state;
}
