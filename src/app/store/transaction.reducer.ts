import {TransactionsActions} from './transaction.actions';

export const initialState = {}

export function transactionReducer(state = initialState, action: TransactionsActions) {

  switch (action.type) {

    case 'ADD_ORDER':
      return {
        ...state,
        id: action.payload.orderID,
        amount: action.payload.amount,
        description: action.payload.description,
        receiver: action.payload.receiver,
        status: action.payload.status,
        currency: action.payload.currency
      };
  }
  return state;
}
