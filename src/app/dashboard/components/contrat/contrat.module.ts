import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { ApiService } from '../../../shared/api-service';
import {FormlyModule} from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ContratComponent} from "./contrat.component";

@NgModule({
  declarations: [
    ContratComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
})
export class ContratModule { }
