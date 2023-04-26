import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/sevices/gameservice.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-datails',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.css']
})
export class DatailsComponent implements OnInit{

  flag:boolean=false
  constructor(private _activatedRoute:ActivatedRoute,private _gameService:GameserviceService){}

id!:string

game:any={}
ngOnInit(): void {
  setTimeout(()=>{
  this._activatedRoute.paramMap.subscribe(res=>{
     this.id=res.get("id")||"";
     console.log(this.id);
this._gameService.getGameDetails(this.id).subscribe(res=>{console.log(res);
  this.flag=true
  this.game=res
})
})},5000)
}

customOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  autoplayTimeout:1000,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    
  },
  
}

}
