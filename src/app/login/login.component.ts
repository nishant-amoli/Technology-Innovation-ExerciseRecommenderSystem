import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    
    @Output()
    login = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
    private router:Router
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
      this.router.navigate(['/']);
    }
    this.login.emit();
  }
}
