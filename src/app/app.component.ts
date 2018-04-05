import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  author = 'Kevin Cardenas Acevedo';
  count = 0;
  imageSource = './../favicon.ico';
  enable = true;

  habilitar(){
    this.enable = !this.enable;
  }
}
