import {NgModule} from '@angular/core';
import {
  MatBadgeModule, MatButtonModule,
  MatButtonToggleModule, MatDividerModule,
  MatExpansionModule, MatGridListModule,
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
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
