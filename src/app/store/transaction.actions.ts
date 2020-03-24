import {Action} from '@ngrx/store';

export const ADD_ORDER = 'ADD_ORDER';

export class TransactionActions implements Action {

  readonly type = ADD_ORDER;

  constructor(public payload: any) {}
}

export type TransactionsActions = TransactionActions;
