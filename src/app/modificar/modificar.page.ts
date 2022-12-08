import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  idtarea = "";
  titulotarea = "";
  textotarea = "";

  constructor(private router:Router, private activedroute: ActivatedRoute, private dbservice: DbserviceService) {
    this.activedroute.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idtarea = this.router.getCurrentNavigation().extras.state.idEnviado;
        this.titulotarea= this.router.getCurrentNavigation().extras.state.tituloEnviado;
        this.textotarea= this.router.getCurrentNavigation().extras.state.textoEnviado;
      }
    })
  }

  editar(){
    this.dbservice.updateTarea(this.idtarea, this.titulotarea, this.textotarea);
    this.dbservice.presentToast("Tarea Modificada");
    this.router.navigate(['/tarea']);
  }

  ngOnInit() {
  }

}