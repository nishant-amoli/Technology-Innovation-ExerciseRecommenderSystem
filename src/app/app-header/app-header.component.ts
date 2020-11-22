import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  isUserLoggedIn = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  UserLoggedIn(){
    console.log("entered")
    this.isUserLoggedIn =true;
  }
}
