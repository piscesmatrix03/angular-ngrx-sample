import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  map,
  catchError,
  concatMap,
  withLatestFrom,
  mergeMap,
} from 'rxjs/operators';
import { getTransactionId, TransactionIdActionTypes } from '../transaction-id';
import { loadJWTError, loadJWTSuccess } from './jwt.action';
import { JWTService } from './jwt.service';
import { get } from 'lodash-es';

@Injectable()
export class JWTEffects {
  loadJWT$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionIdActionTypes.GENERATE_TRANSACTION_ID_SUCCESS),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(getTransactionId)))
      ),
      mergeMap(([, transactionId]) => {
        return this.service.getJWT(transactionId).pipe(
          map((response) => {
            const token: string = get(response, 'token', '');
            return loadJWTSuccess({ token });
          }),
          catchError((error) => {
            return of(loadJWTError({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: JWTService,
    private store: Store
  ) {}
}
