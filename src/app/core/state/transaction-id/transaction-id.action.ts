import { createAction, props } from '@ngrx/store';
import { TransactionIdActionTypes } from './transaction-id.enum';

export const generateTransactionId = createAction(
  TransactionIdActionTypes.GENERATE_TRANSACTION_ID
);

export const generateTransactionIdSuccess = createAction(
  TransactionIdActionTypes.GENERATE_TRANSACTION_ID_SUCCESS,
  props<{ transactionId: string }>()
);

export const generateTransactionIdError = createAction(
  TransactionIdActionTypes.GENERATE_TRANSACTION_ID_ERROR,
  props<{ error: string }>()
);
