import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from 'src/app/shared/snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from 'src/app/shared/snackbar/success-snackbar/success-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  error(title: string, message?: string) {
    this.snackBar(ErrorSnackbarComponent, title, 'error-snackbar', message);
  }

  success(title: string, message?: string) {
    this.snackBar(SuccessSnackbarComponent, title, 'success-snackbar', message);
  }

  private snackBar(
    component: any,
    title: string,
    cssClass: string,
    message?: string
  ) {
    this._snackBar.openFromComponent(component, {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: {
        title: title,
        message: message,
      },
      panelClass: [cssClass],
    });
  }
}
