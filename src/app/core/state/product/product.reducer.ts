import { Action, createReducer, on } from '@ngrx/store';
import { loadProductError, loadProductSuccess } from './product.action';

export interface IProductReducerState {
  product: any;
  error: string;
}

const initialStateProduct: IProductReducerState = {
  product: '',
  error: '',
};

const productReducerAction = createReducer(
  initialStateProduct,
  on(loadProductSuccess, (state, { product }) => ({
    ...state,
    product,
    error: '',
  })),
  on(loadProductError, (state, { error }) => ({
    ...state,
    product: '',
    error,
  }))
);

export function productReducer(
  state: IProductReducerState = initialStateProduct,
  action: Action
) {
  return productReducerAction(state, action);
}
