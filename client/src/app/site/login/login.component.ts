import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loadingService: LoadingService,
    private router : Router
  ) {}

  loading$ = this.loadingService.loading$;

  showpw:boolean = true;

  toggleShowpw(){
    this.showpw= !this.showpw
  }

  // login form using reactive forms
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onLogin(){
    if(this.login.controls.email.value == 'admin' && this.login.controls.password.value =='12345'){
      this.router.navigate(['/admin']);
    }
    else if (this.login.controls.email.value == 'customer' && this.login.controls.password.value =='12345') {
      this.router.navigate(['/site']);
    } else {
      alert('incorrect username and password')
    }
  }

}
