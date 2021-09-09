import { User } from '../user.model';
import { AuthActionsUnion, AuthActions } from './auth.actions';

export type AuthState = {
  user: User;
};

const initialState: AuthState = {
  user: null,
};

export function authReducer(state = initialState, action: AuthActionsUnion) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const { email, userId, token, tokenExpirationDate } = action.payload;

      const user = new User(email, userId, token, tokenExpirationDate);

      return {
        ...state,
        user,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
