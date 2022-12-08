import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';


@Component({
  selector: 'app-agreagar',
  templateUrl: './agreagar.page.html',
  styleUrls: ['./agreagar.page.scss'],
})
export class AgreagarPage implements OnInit {

  titulotarea = "";
  textotarea = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  guardar() {
    this.dbservice.addTarea(this.titulotarea,this.textotarea);
    this.dbservice.presentToast("Tarea agregada ");
    this.router.navigate(['/tarea']);
  }

  ngOnInit() {
  }

}