import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { first, mergeMap } from 'rxjs/operators';
import { getJWT } from '../state/jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.get('skip')) {
      const newHeaders = request.headers.delete('skip');
      const newRequest = request.clone({ headers: newHeaders });
      return next.handle(newRequest);
    } else {
      return this.store.select(getJWT).pipe(
        mergeMap((token) => {
          if (token) {
            request = request.clone({
              setHeaders: {
                Authorization: 'Bearer ' + token,
              },
            });
          }
          return next.handle(request);
        })
      );
    }
  }
}
