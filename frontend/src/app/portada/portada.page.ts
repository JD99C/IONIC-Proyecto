import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {
  
  audio = new Audio();
  reproduciendo: boolean = false;

  constructor(private router : Router) { 
    this.audio.src='../../../assets/audio/carTurbo.mp3'
    this.audio.load();
  }
  ngOnInit() {
    
  }

  play(){
    this.audio.load();
    this.audio.play();
    
  }

  Empezar(){
    this.router.navigateByUrl('/home');
  }

}
