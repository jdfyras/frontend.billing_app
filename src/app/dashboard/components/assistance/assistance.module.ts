import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { ApiService } from '../../../shared/api-service';
import { AssistanceComponent } from './assistance.component';
import {FormlyModule} from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AssistanceComponent,
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
export class AssistanceModule { }
