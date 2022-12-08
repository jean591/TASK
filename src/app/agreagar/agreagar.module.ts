import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgreagarPageRoutingModule } from './agreagar-routing.module';

import { AgreagarPage } from './agreagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgreagarPageRoutingModule
  ],
  declarations: [AgreagarPage]
})
export class AgreagarPageModule {}
