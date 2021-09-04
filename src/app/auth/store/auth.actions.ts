import { Action } from '@ngrx/store';

export enum AuthTypes {
  LOGIN = '[Auth] Login',
  LOGOUT = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthTypes.LOGIN;

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
  readonly type = AuthTypes.LOGOUT;
}

export type AuthActions = Login | Logout;
