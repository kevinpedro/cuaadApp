import { Component } from '@angular/core';

import { MapaPage } from '../mapa/mapa';
import { RecientePage } from '../reciente/reciente';
import { BuscarPage } from '../buscar/buscar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BuscarPage;
  tab2Root = MapaPage;
  tab3Root = RecientePage;

  constructor() {

  }
}
