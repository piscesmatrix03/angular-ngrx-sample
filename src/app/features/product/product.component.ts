import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IProduct } from 'src/app/shared/interface/product.interface';
import { getProduct, loadProduct } from 'src/app/core/state/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ngDestroyed$ = new Subject();
  products: IProduct[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getProductSubscribe();
    this.store.dispatch(loadProduct());
  }

  private getProductSubscribe(): void {
    this.store
      .select(getProduct)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((response) => {
        console.log(response);
        this.products = response;
      });
  }
}
