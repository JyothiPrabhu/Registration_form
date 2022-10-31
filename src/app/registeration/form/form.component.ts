import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  regForm:any;
  regFormList:any =[];
  errorMsg:any ='';
  constructor() { 
    this.regForm =[];
  }

  ngOnInit(): void {
  }
  addUsers(addUser:NgForm){
    var data = addUser.value;
    if(data.password != data.confirmPassword){
       this.errorMsg = "Password mismatch";
       return;
    }
    if(data.gender == undefined){
      this.errorMsg = "Please choose gender";
      return;
    }
    this.regFormList.push(data);
    addUser.resetForm();
    this.errorMsg = '';
  }

  editUser(user:any, index:any){
    this.regForm.firstName = user.firstName;
    this.regForm.lastName = user.lastName;
    this.regForm.phone = user.phone;
    this.regForm.email = user.email;
    this.regForm.gender = user.gender;
    this.regForm.company = user.company;
    this.regForm.password = user.password;
    this.regForm.confirmPassword = user.confirmPassword;
    setTimeout(() => {
      this.regFormList.splice(index, 1);
    }, 150);
  }

  deleteUser(index:any){
    this.regFormList.splice(index, 1);
  }

}
