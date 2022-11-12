import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ApiService} from "../../../shared/api-service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  logout() {
    this.apiService.logout();
  }
}
