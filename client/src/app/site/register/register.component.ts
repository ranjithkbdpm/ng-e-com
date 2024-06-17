import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  showpw:boolean = true;

  toggleShowpw(){
    this.showpw= !this.showpw
  }



  // login form using reactive forms
  register = new FormGroup({
    firstname: new FormControl(''),
    Lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  confirmPassword:string = ''

  onRegister(){

  }
}
