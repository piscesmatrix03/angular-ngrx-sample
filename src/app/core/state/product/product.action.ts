import { createAction, props } from '@ngrx/store';
import { ProductActionTypes } from './product.enum';

export const loadProduct = createAction(ProductActionTypes.LOAD_PRODUCT);

export const loadProductSuccess = createAction(
  ProductActionTypes.LOAD_PRODUCT_SUCCESS,
  props<{ product: any }>()
);

export const loadProductError = createAction(
  ProductActionTypes.LOAD_PRODUCT_ERROR,
  props<{ error: string }>()
);
