import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    
    // @Output()
    // login = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([
        Validators.email,
        Validators.required])
      ],
      password: ['', Validators.required]
  });

  }
  get f() { return this.loginForm.controls; }
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.valid){
      //Update LoginService Variables.
      this.loginService.login(this.loginForm.controls['username'].value)
      this.router.navigate(['/']);
    }
    // this.login.emit();
  }
}
