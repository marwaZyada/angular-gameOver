import { Component } from '@angular/core';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public _gameService:GameserviceService){}
}
