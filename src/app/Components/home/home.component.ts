import { Component, OnInit } from '@angular/core';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _gameService:GameserviceService){}
games:any[]=[]

  ngOnInit(): void {
    this._gameService.getAllGames().subscribe(res=>{console.log(res)
      this.games=res.slice(0,3)
      console.log(this.games);
      
    })
  }
}
