//File location in login folder and file name login.component.ts
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from "../shared/api-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  registerForm = new FormGroup({
    cin: new FormControl('', [Validators.required]),
    contrat: new FormControl('', [Validators.required, Validators.email]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    governorate: new FormControl('', [Validators.required]),
    delegation: new FormControl('', [Validators.required]),
    locality: new FormControl('', [Validators.required]),
    postalcode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  })
  public isLogin = true;
  public loginError: String | undefined;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.apiService.login(this.loginForm.value)
        .subscribe((data: any) => {
            console.log(data);
            if (data) {
              this.router.navigate(['dashboard']);
            }
            /*if(data.status === 200 && !data.body.ErrorCode){
              this.router.navigate(['dashboard']);
            }else{
              this.loginError = data.body.message;
            }*/
          },
          (error: string) => this.loginError = error
        )
    }
  }
}
