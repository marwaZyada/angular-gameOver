import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  constructor(private _httpClient:HttpClient) { }

  getAllGames():Observable<any>{
return  this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers:{
   'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
   'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
}})
 }
}
