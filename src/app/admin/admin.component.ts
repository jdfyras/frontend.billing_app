import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <app-side-nav></app-side-nav>
  `,
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
