import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductReducerState } from './product.reducer';

const getProductFeature =
  createFeatureSelector<IProductReducerState>('product');

export const getProduct = createSelector(
  getProductFeature,
  (state: IProductReducerState) => state.product
);
