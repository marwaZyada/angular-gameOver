import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameserviceService } from 'src/app/sevices/gameservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _fb:FormBuilder,private _gameService:GameserviceService,private _router:Router){}

  registerForm:FormGroup=this._fb.group({
    first_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required,Validators.min(15)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  
  })


  register(dataForm:FormGroup){
    console.log(this.registerForm);
    if(this.registerForm.valid){
this._gameService.register(dataForm.value).subscribe(res=>{console.log(res)
if(res.message=='success'){
this._router.navigate(['/login'])
}
    })

    }
    
  }

}
