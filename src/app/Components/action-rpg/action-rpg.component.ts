import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/sevices/gameservice.service';


@Component({
  selector: 'app-action-rpg',
  templateUrl: './action-rpg.component.html',
  styleUrls: ['./action-rpg.component.css']
})
export class ActionRpgComponent implements OnInit{





  constructor(private _gameService:GameserviceService,private _activatedRoute:ActivatedRoute){
    this._gameService.width.subscribe(val=>{this.width=val
      console.log(this.width);
    })
   
    
  }  
  allGames:any=[]
  games:any[]=[]
  width!:number
  n:number=12


    ngOnInit(): void {
      

      

      this._gameService.getGameCategorie('action-rpg').subscribe(res=>{console.log(res)
        this.allGames=res
        this.games=this.allGames.slice(0,this.n)
        console.log(this.games);

       
        })

        this._gameService.width.subscribe(val=>{this.width=val
          console.log(this.width);
          
         })

        
        
      }
      moreGames(){
        this.n+=12
        this.games=this.allGames.slice(0,this.n)

      }
    
      @HostListener ('window:resize',['$event']) onResize(event:any):void{
        this.width=window.innerWidth
        console.log(window.innerWidth); }
      
       

  }








