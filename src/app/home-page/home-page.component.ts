import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/LoginService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Exercise Recommender App';

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
