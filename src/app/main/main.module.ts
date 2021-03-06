import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddEffectComponent } from './add-effect/add-effect.component';
import { AddScriptComponent } from './add-script/add-script.component';
import { ImageDirective } from '../directives/image.directive';
import { ScriptComponent } from './script/script.component';
import { EffectComponent } from './effect/effect.component';


@NgModule({
  declarations: [
    ContentsComponent,
    HomeComponent,
    AccountDetailsComponent,
    AddEffectComponent,
    AddScriptComponent,
    ImageDirective,
    ScriptComponent,
    EffectComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
