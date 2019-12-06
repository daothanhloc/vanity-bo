import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SDKBrowserModule } from './api';
import { LoginComponent } from './login/login.component';
import { MainModule } from './main/main.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { Ng2ImgMaxModule } from 'ng2-img-max';
//import { ImageDirective } from './directives/image.directive';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    //ImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
    FormsModule,
    MainModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UiSwitchModule,
    Ng2ImgMaxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [
  //   ImageDirective
  // ]
})
export class AppModule { }
