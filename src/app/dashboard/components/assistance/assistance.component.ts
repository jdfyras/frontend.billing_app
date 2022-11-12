import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {ApiService} from "../../../shared/api-service";


@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {
  public model: any;
  public displayedColumns: string[] = ['refClient', 'service', 'motifRec', 'image', 'phone', 'message'];
  public dataSource: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getHistoriqueReclamation()
      .subscribe(data => {
        this.dataSource = data;
      })
  }

  public getHistoriqueReclamation() {
    return this.apiService.sendRequest('get', 'https://run.mocky.io/v3/d7f6d2db-0107-4b08-a042-bbd09704b9a6', {});
  }

  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'contrat',
          type: 'input',
          className: 'flex-3',
          templateOptions: {
            label: 'contrat',
            required: true,
          }
        },
        {
          key: 'service',
          type: 'input',
          className: 'flex-3',
          templateOptions: {
            label: 'service',
            required: true,
          }
        },
        {
          key: 'phone',
          type: 'input',
          className: 'flex-3',
          templateOptions: {
            label: 'phone',
            required: true,
          }
        },
      ],
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'message',
          type: 'textarea',
          className: 'flex-3',
          templateOptions: {
            label: 'message',
            required: true,
          }
        },
      ],
    },
  ];

  onSubmit() {
    this.apiService.sendRequest('post', 'https://run.mocky.io/v3/bbe796a0-def9-408d-93ef-16dc8cacf2e4', {body: this.form.value});
  }

}
