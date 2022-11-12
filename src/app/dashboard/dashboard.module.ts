import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { InvoicesModule } from '../invoices/invoices.module';
import { ClientsModule } from '../clients/clients.module';
import { FactureModule } from './components/facture/facture.module';
import { ContratModule } from './components/contrat/contrat.module';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component';
import {FormlyModule} from "@ngx-formly/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InformationModule} from "./components/information/information.module";
import {AssistanceModule} from "./components/assistance/assistance.module";
import {DemandeModule} from "./components/demande/demande.module";




@NgModule({
  declarations: [
    DashboardComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
    SuggestionsComponent,
    SatisfactionComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
    InformationModule,
    AssistanceModule,
    FactureModule,
    ContratModule,
    DemandeModule,
  ]
})
export class DashboardModule { }
