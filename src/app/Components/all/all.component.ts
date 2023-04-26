import { Component, HostListener, OnInit } from '@angular/core';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{
  
constructor(private _gameService:GameserviceService){
    this._gameService.width.subscribe(val=>{this.width=val
      console.log(this.width);
    })
  }  
  allGames:any=[]
  games:any[]=[]
  width!:number
  n:number=12
    ngOnInit(): void {
      
      this._gameService.getAllGames().subscribe(res=>{console.log(res);
        
        this.allGames=res
        this.games=this.allGames.slice(0,this.n)
        console.log(this.games);
       this._gameService.width.subscribe(val=>{this.width=val
        console.log(this.width);
        
       })
       
        
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

 



