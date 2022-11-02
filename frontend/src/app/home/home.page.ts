import { Component } from '@angular/core';
import { ActionSheetController, IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menuCtrl: MenuController, private actionSheetCtrl: ActionSheetController) {}

  onClick(){
    this.menuCtrl.toggle();
  }

}
