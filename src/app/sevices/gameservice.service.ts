import { HttpClient, HttpParams } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  constructor(private _httpClient:HttpClient,private _router:Router) {
    this.token=localStorage.getItem("token")||"";
      
   }
width:BehaviorSubject<number>=new BehaviorSubject(window.innerWidth)
token:string=""
  register(userData:object):Observable<any>
  {
    return this._httpClient.post('https://sticky-note-fe.vercel.app/signup', userData)

  }
  login(userData:object):Observable<any>
  {
    return this._httpClient.post('https://sticky-note-fe.vercel.app/signin', userData)

  }

  logout(){
localStorage.removeItem("token")
this.token="";
this._router.navigate(["/login"])
  }

  getAllGames():Observable<any>{
return  this._httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games'

// ,{headers:{
//    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
//    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// }}

)
 }
  getGameDetails(id:string):Observable<any>{
return  this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`

// ,{headers:{
//    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
//    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// }}

)
 }
  getGamePlatform(name:string):Observable<any>{
return  this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${name}`
// ,{headers:{
//    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
//    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// }}
)
 }

  getGameSortBy(name:string):Observable<any>{
return  this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${name}`
// ,{headers:{
//    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
//    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// }}

)
 }
  getGameCategorie(name:string):Observable<any>{
return  this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${name}`
// ,
// {headers:{
//    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
//    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// }}

)
 }

 @HostListener ('window:resize',['$event']) onResize(event:any):void{
  this.width.next(window.innerWidth)
  console.log(window.innerWidth); }
  
}
