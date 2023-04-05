import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  constructor(private httpClient: HttpClient) {}

  public getJWT(transactionId: string): Observable<any> {
    return this.httpClient.get('/assets/jwt.json');
  }
}
