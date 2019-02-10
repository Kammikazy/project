import { Component, OnInit } from '@angular/core';
import {AuthService } from './../../auth.service';
import {Router}  from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private Auth:AuthService,
    private router:Router) {

      this.loginForm = new FormGroup({
          username: new FormControl('', [Validators.required, Validators.minLength(4)]),
          password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        });
       }

  ngOnInit() {

}
login() {
  let username = this.loginForm.value.username;
     let password = this.loginForm.value.password;
  this.Auth.getUserDetails(username,password).subscribe(data =>{
    if(data.success){
  this.router.navigate(['homepage'])
  this.Auth.setLoggedIn(true)
  //sdsadad
    }else{
    document.getElementById("erro").style.visibility = "visible";
    window.setTimeout("location.href='login'",3000);

    }
  })

  }

}
