import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TareaPage } from '../tarea/tarea.page';
import { CalendarioFestivoPage } from '../calendario-festivo/calendario-festivo.page';
import { GeolocalizacionPage } from '../geolocalizacion/geolocalizacion.page';

  const routes: Routes = [
    {
      path: '',
      component: HomePage,
      children:[
        {
          path:'tarea',
          component: TareaPage
        },
        {
          path:'calendario-festivo',
          component: CalendarioFestivoPage
        },
        {
          path:'geolocalizacion',
          component: GeolocalizacionPage
        }
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomePageRoutingModule {}