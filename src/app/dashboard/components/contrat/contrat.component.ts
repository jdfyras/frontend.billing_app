import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api-service";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  public displayedColumns: string[] = ['numContrat', 'date_debut', 'date_fin', 'Etat'];
  public dataSource: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getContratList()
      .subscribe(data => {
        this.dataSource = data;
      })
  }

  public getContratList() {
    return this.apiService.sendRequest('get', 'https://run.mocky.io/v3/5927884f-d89d-4717-91bd-44e1af5aaaad', {});
  }

}
