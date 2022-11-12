import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import { ApiService } from '../../../shared/api-service';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public model: any;
  public modelInfo: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getInformations()
      .subscribe(data => {
        this.model = data;
      })

    this.getInformationsUser()
      .subscribe(data => {
        this.modelInfo = data;
      })
  }

  public getInformations() {
    return this.apiService.sendRequest('get', 'https://run.mocky.io/v3/bbe796a0-def9-408d-93ef-16dc8cacf2e4', {});
  }

  public getInformationsUser() {
    return this.apiService.sendRequest('get', 'https://run.mocky.io/v3/a20f9d5c-65cd-454b-85b2-27ba085b8343', {});
  }

  formInfo = new FormGroup({});
  form = new FormGroup({});

  fieldsInfo: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'firstName',
          type: 'input',
          templateOptions: {
            label: 'First Name',
          },
          expressionProperties: {
            'templateOptions.disabled': () => true,
          },
        },
        {
          key: 'lastName',
          type: 'input',
          templateOptions: {
            label: 'Last Name',
          },
          expressionProperties: {
            'templateOptions.disabled': () => true,
          },
        },
        {
          key: 'cin',
          type: 'input',
          templateOptions: {
            label: 'CIN',
          },
          expressionProperties: {
            'templateOptions.disabled': () => true,
          },
        },
        {
          key: 'contrat',
          type: 'input',
          templateOptions: {
            label: 'Contrat',
          },
          expressionProperties: {
            'templateOptions.disabled': () => true,
          },
        },
      ],
    },
  ];
  fields: FormlyFieldConfig[] = [
    {
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          }
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            label: 'password',
            type: 'password',
            placeholder: 'password',
            required: true,
          }
        },
        {
          key: 'phone',
          type: 'input',
          templateOptions: {
            label: 'phone',
            placeholder: 'phone',
            required: true,
          }
        },
      ],
    },
    {
      fieldGroup: [
        {
          key: 'refUser',
          type: 'input',
          templateOptions: {
            label: 'refUser',
          }
        },
        {
          key: 'street',
          type: 'input',
          templateOptions: {
            label: 'Street',
          }
        },
        {
          key: 'governorate',
          type: 'input',
          templateOptions: {
            label: 'Governorate',
          }
        },
      ],
    },
    {
      fieldGroup: [
        {
          key: 'delegation',
          type: 'input',
          templateOptions: {
            label: 'Delegation',
          }
        },
        {
          key: 'locality',
          type: 'input',
          templateOptions: {
            label: 'Locality',
          }
        },
        {
          key: 'postalcode',
          type: 'input',
          templateOptions: {
            label: 'Postalcode',
          }
        },
      ],
    },
    {
      fieldGroup: [
        {
          key: 'city',
          type: 'input',
          templateOptions: {
            label: 'City',
          }
        },
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
          }
        },
        {
          key: 'image',
          type: 'input',
          templateOptions: {
            label: 'Image',
          }
        }
      ],
    },
  ];

  onSubmit() {
    this.apiService.sendRequest('post', 'https://run.mocky.io/v3/bbe796a0-def9-408d-93ef-16dc8cacf2e4', {body: this.model});
  }

}
