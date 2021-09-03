import { User } from '../user.model';
import { AuthActions, AuthTypes } from './auth.actions';

export type AuthState = {
  user: User;
};

const initialState: AuthState = {
  user: null,
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthTypes.LOGIN:
      const { email, userId, token, tokenExpirationDate } = action.payload;

      const user = new User(email, userId, token, tokenExpirationDate);

      return {
        ...state,
        user,
      };
    case AuthTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
