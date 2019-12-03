import { Component, OnInit } from '@angular/core';
import { AccountApi } from '../api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    private accountApi: AccountApi,
    private router: Router
  ) {}

  logout() {
    this.accountApi.logout().subscribe(() => {
      this.router.navigate(['login']);
      console.log('logout succesful');
    }, err => {
      console.log(err);
    })
  }
  ngOnInit() {
  }
}
