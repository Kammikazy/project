import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface myData{
success: boolean,
message: string
}

interface registerRespond{
success: boolean,
message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private loggedStatus=false
  constructor(private http:HttpClient) {

  }
setLoggedIn(value:boolean){
this.loggedStatus=value
//localStorage.setItem('LoggedIn','true')
}

get isLoggedIn(){
return  this.loggedStatus
}

getUserDetails(username,password){
return this.http.post<myData>('api/login',{
username,
password
})
}

registerUser(fullname,address,city,bi,nif,phone,contry,zipcode,username,email,password){
return this.http.post<registerRespond>('api/register',{
fullname,
address,
city,
bi,
nif,
phone,
contry,
zipcode,
username,
email,
password

})
}

}
