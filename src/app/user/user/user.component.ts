import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Profile } from '../model/profile';
import { Technology } from '../model/technology';
import { User } from '../model/user';
import { UserService } from '../service/user-service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isValidFormSubmitted = false;
  allProfiles: Profile[];
  allTechnologies: Technology[];
  initialProfileValue = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allProfiles = this.userService.getProfiles();
    this.allTechnologies = this.userService.getTechnologies();
  }

  onFormSubmitted(form: NgForm){
    this.isValidFormSubmitted = false;
    if(form.valid){
      this.isValidFormSubmitted = true;
    } else {
      return;
    }
    let newUser: User = form.value;
    this.userService.createUser(newUser);
    this.resetFormUser(form);
  }

  resetFormUser(form: NgForm){
    form.resetForm();
    this.initialProfileValue = null;
  }
  
  setDefaultValues(form: NgForm){
    let user = new User();
    user.userName = "shaik";
    user.age = 28;
    user.gender = "male";
    user.isMarried = false;
    user.profile = this.allProfiles[2];
    user.technologies = [this.allTechnologies[0], this.allTechnologies[2]];
    user.isTCAccepted = false;
    form.setValue(user);
  }

  compareTech(t1: Technology, t2: Technology): boolean{
    return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }



}
