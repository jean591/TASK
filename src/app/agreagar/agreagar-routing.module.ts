import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgreagarPage } from './agreagar.page';

const routes: Routes = [
  {
    path: '',
    component: AgreagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgreagarPageRoutingModule {}
