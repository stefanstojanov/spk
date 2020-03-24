import {Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';

export class UserActions implements Action {

  readonly type = LOGIN;

  constructor(public payload: any) {}
}

export type UsersActions = UserActions;
