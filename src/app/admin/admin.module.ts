import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { InvoicesModule } from '../invoices/invoices.module';
import { ClientsModule } from '../clients/clients.module';
import { FactureModule } from './components/facture/facture.module';
import {FormlyModule} from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ContratModule} from "./components/contrat/contrat.module";
import {UsersModule} from "./components/users/users.module";
import {ClientModule} from "./components/client/client.module";
import {DemandeModule} from "./components/demande/demande.module";
import {SuggestionModule} from "./components/suggestion/suggestion.module";




@NgModule({
  declarations: [
    AdminComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
    FactureModule,
    ContratModule,
    UsersModule,
    ClientModule,
    DemandeModule,
    SuggestionModule,
  ]
})
export class AdminModule {}
