import { Component, OnInit } from '@angular/core';
import { AccountApi, LoopBackAuth, AccessToken } from '../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountApi: AccountApi,
    private auth: LoopBackAuth,
    private router: Router
  ) {

  }

  login(email, password) {
    const account = `{"username":"${email}","password":"${password}"}`;
    this.accountApi.login(account).subscribe(
      (data: AccessToken) => {
        this.auth.setUser(data.user);
        this.router.navigate(['main/home']);
        console.log(data);
        console.log(this.auth.getCurrentUserData());
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {

  }

}
