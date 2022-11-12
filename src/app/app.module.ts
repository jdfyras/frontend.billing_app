import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {CookieService} from "ngx-cookie-service";
import {ApiService} from "./shared/api-service";
import {LoginModule} from "./login/login.module";
import {HttpClientModule} from "@angular/common/http";
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    GridModule,
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
