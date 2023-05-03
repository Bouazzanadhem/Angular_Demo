import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  hide = true;
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })

  constructor(private userService:AuthService) { }
  
  ngOnInit(): void {
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.userService.SigninUser(this.loginForm.value)
    
  }
}
