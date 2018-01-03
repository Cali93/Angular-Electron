import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngElectron2';

  constructor(private _elctronService: ElectronService){}
    launchWindow(){
      this._elctronService.shell.openExternal('https://becode.org')
    }
  }
