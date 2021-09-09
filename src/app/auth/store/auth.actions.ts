import { Action } from '@ngrx/store';

export enum AuthActions {
  LOGIN_START = '[Auth] Login Start',
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthActions.LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      tokenExpirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = AuthActions.LOGOUT;
}

export type AuthActionsUnion = Login | Logout;
