import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { transactionIdReducer } from './transaction-id.reducer';
import { TransactionIdEffects } from './transaction-id.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('transactionId', transactionIdReducer),
    EffectsModule.forFeature([TransactionIdEffects]),
  ],
})
export class TransactionIdStateModule {}
