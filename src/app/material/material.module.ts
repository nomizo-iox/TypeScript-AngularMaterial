import {NgModule} from '@angular/core';
import {
  MatBadgeModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule,
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
  MatStepperModule, MatFormFieldModule, MatInputModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
