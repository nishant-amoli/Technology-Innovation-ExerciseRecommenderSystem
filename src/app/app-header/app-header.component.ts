import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/LoginService';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  isUserLoggedIn = true;
  constructor(
    public loginService: LoginService,
    private router:Router) { }

  ngOnInit(): void {
  }
  
  UserLoggedIn(){
    console.log("entered")
    this.isUserLoggedIn =true;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}
