import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store/src';
import { of } from 'rxjs';
import { map, mergeMap, catchError, delay } from 'rxjs/operators';
import {
  generateTransactionIdError,
  generateTransactionIdSuccess,
} from './transaction-id.action';
import { TransactionIdActionTypes } from './transaction-id.enum';
import { TransactionIdService } from './transaction-id.service';

@Injectable()
export class TransactionIdEffects implements OnInitEffects {
  generateTransactionId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransactionIdActionTypes.GENERATE_TRANSACTION_ID),
      mergeMap(() =>
        this.service.generateTransactionId().pipe(
          map((response) => {
            return generateTransactionIdSuccess({ transactionId: response });
          }),
          catchError((error) => {
            return of(generateTransactionIdError({ error }));
          })
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return { type: TransactionIdActionTypes.GENERATE_TRANSACTION_ID };
  }

  constructor(
    private actions$: Actions,
    private service: TransactionIdService
  ) {}
}
