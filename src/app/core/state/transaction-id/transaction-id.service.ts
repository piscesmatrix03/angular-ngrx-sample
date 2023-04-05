import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TransactionIdService {
  constructor() {}

  public generateTransactionId(): Observable<string> {
    const dateTime: number = new Date().getTime();
    const randomNumber = Math.floor(
      window.crypto.getRandomValues(new Uint32Array(1))[0]
    );
    const fourRandomDigits = randomNumber.toString().substring(0, 6);

    return of(`${dateTime} ${fourRandomDigits}`);
  }
}
