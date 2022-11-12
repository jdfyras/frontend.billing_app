import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from "./login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ApiService} from "../shared/api-service";
import {MatInputModule} from "@angular/material/input";
import {ButtonsModule} from "@progress/kendo-angular-buttons";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonsModule,
  ],
  providers: [ApiService],
})
export class LoginModule {}
