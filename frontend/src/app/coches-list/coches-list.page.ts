import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.page.html',
  styleUrls: ['./coches-list.page.scss'],
})
export class CochesListPage implements OnInit {

  coches:any = [ ]

  constructor(private cocheService: CocheService, private router: Router) { }

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

  removeCoche(coche, i) {
    if (window.confirm('¿Estas seguro de eliminar?')) {
      this.cocheService.deleteCoche(coche.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          
          console.log('Dato eliminado!')
        }
      )
    }
  }

  doRefresh(event){
    this.getAllCoches();

    setTimeout(() => {
      event.target.complete(this.ionViewDidEnter);
    }, 2000);
  }
}

