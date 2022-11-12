import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/api-service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public user: any;

  constructor(private  apiService: ApiService) { }

  ngOnInit() {
    this.user = JSON.parse(<string>localStorage.getItem('currentUser'));
  }

}
