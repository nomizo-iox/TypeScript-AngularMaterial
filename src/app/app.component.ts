import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  opened1 = false;
  opened2 = false;
  opened3 = false;
  opened4 = false;
  opened5 = false;
  opened6 = false;
  opened7 = false;
  opened8 = false;

  log(state) {
    console.log(state);
  }
}
