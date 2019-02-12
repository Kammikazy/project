import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Login: any;
declare var FormElements: any;
import {AuthService } from './../../auth.service';
import {Router}  from '@angular/router';
import {FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';
import { RegistrationValidator } from './register.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup
  constructor(private auth:AuthService,
  private router:Router,private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      Fullname: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
            City: new FormControl('', [Validators.required]),
            Bi: new FormControl('', [Validators.required]),
              nif: new FormControl('', [Validators.required]),
                Phone: new FormControl('', [Validators.required]),
                      Contry: new FormControl('', [Validators.required]),
                          Zipcode: new FormControl('', [Validators.required]),
                username: new FormControl('', [Validators.required, Validators.minLength(4)]),
                email: new FormControl('', [Validators.required,Validators.email]),
                email_again: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password_again: new FormControl('', [Validators.required, Validators.minLength(8)]),
      }, {
           validator: RegistrationValidator.validate.bind(this)
         });

  }

  ngOnInit() {
/*
    this.registerForm = new FormGroup({
      Fullname: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
            City: new FormControl('', [Validators.required]),
            Bi: new FormControl('', [Validators.required]),
              nif: new FormControl('', [Validators.required]),
                Phone: new FormControl('', [Validators.required]),
                      Contry: new FormControl('', [Validators.required]),
                          Zipcode: new FormControl('', [Validators.required]),
                username: new FormControl('', [Validators.required, Validators.minLength(4)]),
                email: new FormControl('', [Validators.required,Validators.email]),
                    email_again: new FormControl('', [Validators.required,Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password_again: new FormControl('', [Validators.required, Validators.minLength(8)]),

      });
/* $(document).ready(function() {

  //    Login.init();
     FormElements.init();
   });
  */

  }
registerUser(){
  let fullname  = this.registerForm.value.Fullname;
  let  address = this.registerForm.value.Address;
  let city = this.registerForm.value.City;
  let bi = this.registerForm.value.Bi;
  let nif = this.registerForm.value.nif;
  let phone = this.registerForm.value.Phone;
  let contry = this.registerForm.value.Contry;
  let zipcode = this.registerForm.value.Zipcode;
    let username  = this.registerForm.value.username;
  let email = this.registerForm.value.email;
  let email_again = this.registerForm.value.email_again;
    let password  = this.registerForm.value.password;
  let cpassword  = this.registerForm.value.password_again;
let nivel='1';

  const errors=[]
if(errors.length===0){
this.auth.registerUser(fullname,address,city,bi,nif,phone,contry,zipcode,username,email,password,nivel).subscribe(data =>{
  //console.log(data);
  if(data.success){
//this.router.navigate(['home'])
document.getElementById("erro").style.visibility = "visible";
window.setTimeout("location.href='login'",3000);

}else{
  document.getElementById("erro1").style.visibility = "visible";
  window.setTimeout("location.href='register'",3000);
}
})
}
  //console.log(username,password);
  }
}
