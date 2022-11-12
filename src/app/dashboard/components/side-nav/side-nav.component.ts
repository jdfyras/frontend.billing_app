import { Component, OnInit, NgZone } from '@angular/core';
import 'zone.js';

const MAX_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width : ${MAX_WIDTH_BREAKPOINT}px)`
  );
  links = [
    {
    name: 'Tableau de bord',
    url: 'dashboard'
  },{
    name: 'Mes informations',
    url: 'information'
  },{
    name: 'Factures',
    url: 'factures'
  },{
    name: 'Gerer mes contrats',
    url: 'contrat'
  },{
    name: 'Demandes',
    url: 'demandes'
  },{
    name: 'Reclamations',
    url: 'reclamations'
  },{
    name: 'Suggestions',
    url: 'suggestions'
  }];
  constructor(zone: NgZone) {
    this.mediaMatcher.addListener((mql) => {
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`));
    });
  }

  ngOnInit() {}

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }
}
