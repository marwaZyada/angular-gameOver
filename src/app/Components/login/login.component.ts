import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
constructor(private _fb:FormBuilder ,private _gameService:GameserviceService,private _router:Router){}

loginForm:FormGroup=this._fb.group({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
})

login(dataForm:FormGroup){
console.log(dataForm);
if(dataForm.valid){
this._gameService.login(dataForm.value).subscribe(res=>{
  console.log(res);
  if(res.message=='success'){
    this._router.navigate(['/home'])
    localStorage.setItem('token',res.token)
    this._gameService.token=res.token
  }
  
})
}

}

}
