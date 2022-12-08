import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioFestivoPage } from './calendario-festivo.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioFestivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioFestivoPageRoutingModule {}
