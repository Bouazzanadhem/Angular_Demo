import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: any;
  constructor(private userService:AuthService) {
    this.isLoggedIn = userService.isLoggedIn();
   }

  ngOnInit(): void {
  }
  Signout(){
    this.userService.SignoutUser();
  }

}
