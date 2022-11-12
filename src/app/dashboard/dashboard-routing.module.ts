import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashboardComponent } from './dashboard.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from '../clients/components/client-listing/client-listing.component';
import {InformationComponent} from "./components/information/information.component";
import {FactureComponent} from "./components/facture/facture.component";
import {ContratComponent} from "./components/contrat/contrat.component";
import {AssistanceComponent} from "./components/assistance/assistance.component";
import {SuggestionsComponent} from "./components/suggestions/suggestions.component";
import {SatisfactionComponent} from "./components/satisfaction/satisfaction.component";
import {DemandeComponent} from "./components/demande/demande.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: InvoiceListingComponent,
      },
      {
        path: 'dashboard',
        component: InvoiceListingComponent
      },
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'factures',
        component: FactureComponent
      },
      {
        path: 'contrat',
        component: ContratComponent
      },
      {
        path: 'reclamations',
        component: AssistanceComponent
      },
      {
        path: 'suggestions',
        component: SuggestionsComponent
      },
      {
        path: 'demandes',
        component: DemandeComponent

      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
