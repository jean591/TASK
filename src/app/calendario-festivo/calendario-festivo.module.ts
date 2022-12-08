import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioFestivoPageRoutingModule } from './calendario-festivo-routing.module';

import { CalendarioFestivoPage } from './calendario-festivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioFestivoPageRoutingModule
  ],
  declarations: [CalendarioFestivoPage]
})
export class CalendarioFestivoPageModule {}
