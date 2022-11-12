import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { ApiService } from '../../../shared/api-service';
import {FormlyModule} from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {ContratComponent} from "./contrat.component";
import {GridModule} from "@progress/kendo-angular-grid";
import {EditService} from "./edit.service";

@NgModule({
  declarations: [
    ContratComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientJsonpModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
  ],
  providers: [
    ApiService,
    {
      deps: [HttpClient],
      provide: EditService,
      useFactory: (jsonp: HttpClient) => () => new EditService(jsonp),
    },
  ]
})
export class ContratModule {}
