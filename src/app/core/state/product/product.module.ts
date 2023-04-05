import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './product.reducer';
import { ProductEffects } from './product.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
})
export class ProductStateModule {}
