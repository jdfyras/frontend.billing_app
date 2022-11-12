import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api-service";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  public displayedColumns: string[] = ['numFacture', 'Montant_aPayer', 'Reste_aPayer', 'prise_charge', 'Echeances', 'actions'];
  public dataSource: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFactureList()
      .subscribe(data => {
        this.dataSource = data;
      })
  }

  public getFactureList() {
    return this.apiService.sendRequest('get', 'https://run.mocky.io/v3/8c3a1fd2-daff-4b0a-83f1-c8eeab2a258c', {});
  }

}
