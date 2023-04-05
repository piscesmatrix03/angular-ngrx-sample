import { Action, createReducer, on } from '@ngrx/store';
import {
  generateTransactionIdError,
  generateTransactionIdSuccess,
} from './transaction-id.action';

export interface ITransactionIdReducerState {
  transactionId: string;
  error: string;
}

const initialStateTransactionId: ITransactionIdReducerState = {
  transactionId: '',
  error: '',
};

const transactionIdReducerAction = createReducer(
  initialStateTransactionId,
  on(generateTransactionIdSuccess, (state, { transactionId }) => ({
    ...state,
    transactionId,
    error: '',
  })),
  on(generateTransactionIdError, (state, { error }) => ({
    ...state,
    transactionId: '',
    error,
  }))
);

export function transactionIdReducer(
  state: ITransactionIdReducerState = initialStateTransactionId,
  action: Action
) {
  return transactionIdReducerAction(state, action);
}
