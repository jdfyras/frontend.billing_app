import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import {FactureComponent} from "./components/facture/facture.component";
import {ContratComponent} from "./components/contrat/contrat.component";
import {UsersComponent} from "./components/users/users.component";
import {ClientComponent} from "./components/client/client.component";
import {DemandeComponent} from "./components/demande/demande.component";
import {SuggestionComponent} from "./components/suggestion/suggestion.component";
import {InformationComponent} from "../dashboard/components/information/information.component";


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent
      },{
        path: 'users',
        component: UsersComponent
      },{
        path: 'clients',
        component: ClientComponent
      },{
        path: 'contrats',
        component: ContratComponent
      },{
        path: 'factures',
        component: FactureComponent
      },{
        path: 'demandes',
        component: DemandeComponent
      },{
        path: 'suggestions',
        component: SuggestionComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
