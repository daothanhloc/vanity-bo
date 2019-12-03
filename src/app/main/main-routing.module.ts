import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddEffectComponent } from './add-effect/add-effect.component';
import { AddScriptComponent } from './add-script/add-script.component';


const mainRoutes: Routes = [
  { path: 'main', component: MainComponent, children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'contents', component: ContentsComponent
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'account-details',
      component: AccountDetailsComponent
    },
    {
      path: 'add-effect',
      component: AddEffectComponent
    },
    {
      path: 'add-script',
      component: AddScriptComponent
    }
] }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
