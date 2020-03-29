import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message, action) {
    this.snackBar.open(message, action);
  }

  openSnackBar2(message, action) {
   let snackBarRef = this.snackBar.open(message, action);

   snackBarRef.afterDismissed().subscribe(() => {
     console.log('The snackbar was dismissed');
   });

   snackBarRef.onAction().subscribe(() => {
     console.log('The snackbar action was triggered');
   });
  }

  openSnackBar3(message, action) {
    let snackBarRef3 = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef3.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef3.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }
}
