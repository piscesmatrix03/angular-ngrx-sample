import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { jwtReducer } from './jwt.reducer';
import { JWTEffects } from './jwt.effect';

@NgModule({
  imports: [
    StoreModule.forFeature('jwt', jwtReducer),
    EffectsModule.forFeature([JWTEffects]),
  ],
})
export class JWTStateModule {}
