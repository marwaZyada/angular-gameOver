import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest=request.clone({
   headers:request.headers.set("X-RapidAPI-Key", "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68")
   .set('X-RapidAPI-Host','free-to-play-games-database.p.rapidapi.com')})
    return next.handle(newRequest);
  }
}
