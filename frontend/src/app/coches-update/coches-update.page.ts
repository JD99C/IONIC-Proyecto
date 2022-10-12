import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CocheService } from '../services/coche.service';

@Component({
  selector: 'app-coches-update',
  templateUrl: './coches-update.page.html',
  styleUrls: ['./coches-update.page.scss'],
})
export class CochesUpdatePage implements OnInit {
  updateCocheFg: FormGroup;
  id: any;

  constructor(
    private cocheService: CocheService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateCocheFg = this.formBuilder.group({
      marca: [''],
      modelo: [''],
      precio: ['']
    })
  }

  fetchUser(id) {
    this.cocheService.getCoche(id).subscribe((data) => {
      this.updateCocheFg.setValue({
        marca: data['marca'],
        modelo: data['modelo'],
        precio: data['precio']
      });
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Actualizado Correctamente',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  onSubmit() {
    if (!this.updateCocheFg.valid) {
      return false;
    } else {
      this.cocheService.updateCoche(this.id, this.updateCocheFg.value)
        .subscribe(() => {
          this.updateCocheFg.reset();
          this.router.navigate(['/coches-list']);
        })
    }
  }

}
