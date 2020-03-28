import {NgModule} from '@angular/core';
import {
  MatBadgeModule, MatButtonModule,
  MatButtonToggleModule, MatDividerModule,
  MatIconModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';



const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule, MatDividerModule,
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
