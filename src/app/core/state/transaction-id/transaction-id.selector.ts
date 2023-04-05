import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITransactionIdReducerState } from './transaction-id.reducer';

const getTransactionIdFeature =
  createFeatureSelector<ITransactionIdReducerState>('transactionId');

export const getTransactionId = createSelector(
  getTransactionIdFeature,
  (state: ITransactionIdReducerState) => state.transactionId
);
