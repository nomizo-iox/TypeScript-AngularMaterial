import {NgModule} from '@angular/core';
import {
  MatBadgeModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatSidenavModule, MatStepperModule, MatTabsModule, MatToolbarModule
} from '@angular/material';



const MaterialComponents = [
  MatButtonModule, MatButtonToggleModule, MatIconModule,
  MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatListModule, MatDividerModule, MatGridListModule,
  MatExpansionModule, MatCardModule, MatTabsModule,
  MatStepperModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
