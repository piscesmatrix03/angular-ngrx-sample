import { createAction, props } from '@ngrx/store';
import { JWTActionTypes } from './jwt.enum';

export const loadJWT = createAction(JWTActionTypes.LOAD_JWT);

export const loadJWTSuccess = createAction(
  JWTActionTypes.LOAD_JWT_SUCCESS,
  props<{ token: string }>()
);

export const loadJWTError = createAction(
  JWTActionTypes.LOAD_JWT_ERROR,
  props<{ error: string }>()
);
