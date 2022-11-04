import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.page.html',
  styleUrls: ['./coches-list.page.scss'],
})
export class CochesListPage implements OnInit {

  coches:any = [ ]

  constructor(private cocheService: CocheService, private router: Router ,private alertController: AlertController) { }

  ngOnInit() {
    this.getAllCoches();
  }

  getAllCoches(){
    this.cocheService.getCoches().subscribe(response =>{
      this.coches = response;
    });
  }

  ionViewDidEnter() {
    this.cocheService.getCoches().subscribe((response) => {
      this.coches = response;
    })
  }


  handlerMessage = '';
  roleMessage = '';


async removeCoche(coche, i) {

  const alert = await this.alertController.create({
    header: '¿Quieres Borrar?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          this.cocheService.deleteCoche(coche.id)
          .subscribe(() => {
          this.ionViewDidEnter();
          
          console.log('Dato eliminado!')
        }
      )
        },
      },
    ],
  });

    await alert.present();
  }

 


  doRefresh(event){
    this.getAllCoches();

    setTimeout(() => {
      event.target.complete(this.ionViewDidEnter);
    }, 2000);
  }

  buscar(event){
    
    //set cal to the value of the searchbar
    const val = event.target.value;

    //if the value is an empty string don´t filter the items
    if(val && val.trim() !== ''){
      this.coches = this.coches.filter((item) => {
        return (item.marca.toLowerCase().indexOf(val.toLowerCase()) > -1);

      });
    }else{
      //Reset items back to all of the items
      this.getAllCoches();
    }

  }
}

