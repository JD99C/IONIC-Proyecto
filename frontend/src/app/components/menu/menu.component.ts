import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  

  constructor(private alertController: AlertController) { 
    ;
  }

  imagen = "../../../assets/imagen/AllMight2.png"

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información sobre el Creador',
      subHeader: '',
      message: `<img src="${this.imagen}" alt="g-maps" style="border-radius: 2px"> ¡Hola!, Esta es mi aplicación sobre coches, la verdad es que no tuve ninguna inspiración cuando decidí hacerla sobre esto, pero algo tenia que hacer y esto es lo que se me ocurrió. ¡Espero que os guste! :D ` ,
      buttons: ['OK'],
    });

    await alert.present();
  }



}
