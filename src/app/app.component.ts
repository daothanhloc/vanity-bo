import { Component, OnInit } from '@angular/core';
import { LoopBackConfig } from './api';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vanity-bo';
  constructor(
    
  ) {
    LoopBackConfig.setBaseURL(environment.apiUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion);
    LoopBackConfig.whereOnUrl();
  }
  ngOnInit()  {

  }
}
