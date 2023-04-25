import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { GameserviceService } from '../sevices/gameservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _gameService:GameserviceService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("token")!=null){
        if(jwtDecode(localStorage.getItem("token")||"")){
    return true;
        }
        else{
          localStorage.removeItem("token");
          this._gameService.token="";
          this._router.navigate(['/login'])
          return false
        }
  }
  else{
    return false
  }
}
}
