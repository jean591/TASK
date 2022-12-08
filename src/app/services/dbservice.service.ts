import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tarea} from './tareaserv';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  public database: SQLiteObject;

  tablaTarea: string = "CREATE TABLE IF NOT EXISTS tarea(id INTEGER PRIMARY KEY autoincrement, titulo VARCHAR(50) NOT NULL, texto TEXT NOT NULL);";
  registro: string = "INSERT or IGNORE INTO tarea(id, titulo, texto) VALUES (1, 'Titulo tarea', 'Descripcion');";
  listaTarea= new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();
   }

   addTarea(titulo,texto){
    let data=[titulo,texto];
    return this.database.executeSql('INSERT INTO tarea(titulo,texto) VALUES(?,?)',data)
    .then(res =>{
      this.buscarTarea();
    })

  }

  updateTarea(id, titulo, texto){
    let data = [titulo, texto, id];
    return this.database.executeSql('UPDATE tarea SET titulo = ?, texto = ? WHERE id = ?', data)
    .then(data2 =>{
      this.buscarTarea();
    })

  }

  deleteTarea(id){
    return this.database.executeSql('DELETE FROM tarea WHERE id = ?', [id])
    .then(a =>{
      this.buscarTarea();
    })
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'tarea3.db',
        location: 'default',

      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD Creada");
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaTarea, []);
      await this.database.executeSql(this.registro, []);
      this.presentToast("Tabla Creada");
      this.buscarTarea();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentToast("error creartabla " + e);
    }
  }

  buscarTarea() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM tarea', []).then(res => {
      let items: Tarea[] = [];
      //this.presentAlert("b");
      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) {
          //this.presentAlert("d");
          items.push({
            id: res.rows.item(i).id,
            titulo: res.rows.item(i).titulo,
            texto: res.rows.item(i).texto
          });
        }
      }
      //this.presentAlert("d");
      this.listaTarea.next(items);
    });
  }

  fetchTarea(): Observable<Tarea[]> {
  return this.listaTarea.asObservable();
  }

  async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 3000
  });
  toast.present();
  }



}


