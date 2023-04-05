import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  map,
  catchError,
  concatMap,
  withLatestFrom,
  switchMap,
  mergeMap,
} from 'rxjs/operators';
import { getTransactionId } from '../transaction-id';
import { loadProductError, loadProductSuccess } from './product.action';
import { ProductActionTypes } from './product.enum';
import { ProductService } from './product.service';

@Injectable()
export class ProductEffects {
  getProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActionTypes.LOAD_PRODUCT),
      concatMap((action) =>
        of(action).pipe(withLatestFrom(this.store.select(getTransactionId)))
      ),
      mergeMap(([, transactionId]) => {
        return this.service.getProduct(transactionId).pipe(
          map((response) => {
            return loadProductSuccess({ product: response });
          }),
          catchError((error) => {
            return of(loadProductError({ error }));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private service: ProductService,
    private store: Store
  ) {}
}
