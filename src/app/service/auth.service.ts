import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data = {role: "admin"};
  //data = {role: "user"};

  constructor() { }

  decode(){
    return this.data;
  }

  isAuthenticated(): boolean{
    return true;
  }

}
