import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { localStorageSync } from 'ngrx-store-localstorage';
import { TransactionIdStateModule } from './state/transaction-id';
import { ProductStateModule } from './state/product';
import { JWTStateModule } from './state/jwt';
import { AuthInterceptor } from './interceptor/auth.interceptor';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['transactionId'],
    rehydrate: true,
    storage: sessionStorage,
    checkStorageAvailability: false,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers,
      }
    ),
    EffectsModule.forRoot([]),
    JWTStateModule,
    TransactionIdStateModule,
    ProductStateModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
