import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CocheService } from '../services/coche.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-coches-create',
  templateUrl: './coches-create.page.html',
  styleUrls: ['./coches-create.page.scss'],
})
export class CochesCreatePage implements OnInit {

  cocheForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private cocheService: CocheService,
    private photoService: PhotoService,
    private router: Router) { }

    ionViewWillEnter() {
      this.cocheForm.reset();
      this.isSubmitted = false;
      this.capturedPhoto = "";
    }

  ngOnInit() {
    this.cocheForm = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      precio: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.cocheForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.cocheForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.cocheService.createCoche(this.cocheForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/coches-list");
      })
    }
  }
}
