import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent implements OnInit{
  constructor(private _activatedRoute:ActivatedRoute,private _gameService:GameserviceService){}

id!:string

game:any={}
ngOnInit(): void {
  this._activatedRoute.paramMap.subscribe(res=>{
     this.id=res.get("id")||"";
     console.log(this.id);
this._gameService.getGameDetails(this.id).subscribe(res=>{console.log(res);
  this.game=res
})
  })
}
}
