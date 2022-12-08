import { Component, OnInit } from '@angular/core';
import { ApiServicioService } from '../services/api-servicio.service';
import { Apiclass } from '../services/apiclass';

@Component({
  selector: 'app-calendario-festivo',
  templateUrl: './calendario-festivo.page.html',
  styleUrls: ['./calendario-festivo.page.scss'],
})
export class CalendarioFestivoPage  {
  getdata:any []=[];



  constructor(public apiservice:ApiServicioService) { 
    this.apiservice.getdata<any[]>("").subscribe(data => {

      this.getdata = data

    })


}
}