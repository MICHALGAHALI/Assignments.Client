import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newReq = request.clone({
     // headers: request.headers.append('Content-Type', '*')
    })
    console.log("enter");
    return next.handle(newReq).pipe(
      catchError((err) => {
        console.log(err);
         return []
      })
    );
  }
}
