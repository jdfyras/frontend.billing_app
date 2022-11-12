import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api-service";
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {

  public model: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({});

  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'context',
          type: 'select',
          templateOptions: {
            label: 'Contexte de suggestion',
            options: [
              {label: 'Comercial', value: 'Comercial'},
              {label: 'Technique', value: 'Technique'},
            ],
            required: true,
          }
        },
        {
          key: 'sujet',
          type: 'input',
          templateOptions: {
            label: 'Sujet',
            required: true,
          }
        },
        {
          key: 'message',
          type: 'textarea',
          templateOptions: {
            label: 'Message',
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
