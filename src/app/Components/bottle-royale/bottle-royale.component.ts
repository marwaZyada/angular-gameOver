import { Component, HostListener, OnInit,ViewChild, AfterViewInit,  ElementRef ,  Renderer2} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-bottle-royale',
  templateUrl: './bottle-royale.component.html',
  styleUrls: ['./bottle-royale.component.css']
})
export class BottleRoyaleComponent implements OnInit,AfterViewInit{


@ViewChild('ref') ref!:ElementRef;

  constructor(private _gameService:GameserviceService,private _activatedRoute:ActivatedRoute,private renderer:Renderer2){
    this._gameService.width.subscribe(val=>{this.width=val
      console.log(this.width);
    })
   
    
  }  
  allGames:any=[]
  games:any[]=[]
  width!:number
  n:number=12


    ngOnInit(): void {
      

      

      this._gameService.getGameCategorie('battle-royale').subscribe(res=>{console.log(res)
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
  //       if(this.n>this.allGames.length){
  //         this.renderer.setAttribute(this.ref,"disabled","true")
  //  }

      }
    
      @HostListener ('window:resize',['$event']) onResize(event:any):void{
        this.width=window.innerWidth
        console.log(window.innerWidth); }
      
     ngAfterViewInit(): void {
      console.log("hi");

     }  

  }











