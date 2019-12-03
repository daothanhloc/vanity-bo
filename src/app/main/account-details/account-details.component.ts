import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EffectScript, AccountApi } from 'src/app/api';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  effectScript: EffectScript[] = [];
  effect: EffectScript[] = [];
  script: EffectScript[] = [];
  constructor(
    private router: Router,
    private accountApi: AccountApi
  ) {}

  accountId = this.router.getCurrentNavigation().extras.state.accountId;
  accountName = this.router.getCurrentNavigation().extras.state.accountName;

  ngOnInit() {
    console.log(this.accountId);
    this.getEfSc();
  }

  getEfSc() {
    this.accountApi.getEffectScripts(this.accountId).subscribe(
      (data: EffectScript[]) => {
        this.effectScript = data;
        console.log(data);
        this.effect = this.effectScript.filter(efsc => efsc.type === 'effect');
        this.script = this.effectScript.filter(efsc => efsc.type === 'script');
      });
  }

}
