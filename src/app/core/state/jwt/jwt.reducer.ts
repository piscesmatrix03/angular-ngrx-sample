import { Action, createReducer, on } from '@ngrx/store';
import { loadJWTError, loadJWTSuccess } from './jwt.action';

export interface IJWTReducerState {
  token: string;
  error: string;
}

const initialStateJWT: IJWTReducerState = {
  token: '',
  error: '',
};

const jwtReducerAction = createReducer(
  initialStateJWT,
  on(loadJWTSuccess, (state, { token }) => ({
    ...state,
    token,
    error: '',
  })),
  on(loadJWTError, (state, { error }) => ({
    ...state,
    product: '',
    error,
  }))
);

export function jwtReducer(
  state: IJWTReducerState = initialStateJWT,
  action: Action
) {
  return jwtReducerAction(state, action);
}
