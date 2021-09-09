import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { AuthActions, LoginStart, Login } from './auth.actions';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: LoginStart) => {
      return this.http
        .post<AuthResponseData>(
          'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
            environment.firebaseAPIKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true,
          }
        )
        .pipe(
          map((responseData) => {
            const expirationDate = new Date(
              new Date().getTime() + Number(responseData.expiresIn) * 1000
            );
            return of(
              new Login({
                email: responseData.email,
                userId: responseData.localId,
                token: responseData.idToken,
                tokenExpirationDate: expirationDate,
              })
            );
          }),
          catchError((error) => {
            return of();
          })
        );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
