import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [null, Validators.compose([
      Validators.email,
      Validators.required
      ])
    ],
      password: [null, Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])
    ],
      confirmPassword: ['', Validators.required],
  });
}

  get f() { return this.registerForm.controls; }
  
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
      // this.router.navigate(['/login']);
      this.router.navigate(['/dashboard'], { queryParams: { active: 2}});
    }
  }

}
