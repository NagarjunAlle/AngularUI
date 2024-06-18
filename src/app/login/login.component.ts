import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  id!:number;
  username!:string;
  password!:string;
   user:User=new User();

   constructor(private loginService : LoginService){}
  ngOnInit():void
  {}

  onSubmit(){

    const data={id:this.id,username:this.username,password:this.password}
    this.loginService.verifyUser(this.user).subscribe(data => {
      console.log(data);
      this.loginService.goToDashboard();
    },
      error => console.log(error));
  }
  
}
