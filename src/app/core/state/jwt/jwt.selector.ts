import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IJWTReducerState } from './jwt.reducer';

const getJWTFeature = createFeatureSelector<IJWTReducerState>('jwt');

export const getJWT = createSelector(
  getJWTFeature,
  (state: IJWTReducerState) => state.token
);
