import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginObject } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  signIn: LoginObject = {
    email : '',
    password : '',
  }

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl
  }

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  submit(){
    this.signIn = {
      email: this.loginForm.value['email'],
      password: this.loginForm.value['password'],
    }

    this.authService.login(this.signIn.email, this.signIn.password)
    .subscribe((resp:any) => {
        console.log(resp);
        localStorage.setItem('user', JSON.stringify(resp.token));
        if(resp.token !== null){
          this.router.navigate(['/home'])
        }
    })
  }

}
