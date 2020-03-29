import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatStepperModule, MatTabsModule, MatToolbarModule
} from '@angular/material';



const MaterialComponents = [
  MatButtonModule, MatButtonToggleModule, MatIconModule,
  MatBadgeModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatToolbarModule, MatSidenavModule, MatMenuModule,
  MatListModule, MatDividerModule, MatGridListModule,
  MatExpansionModule, MatCardModule, MatTabsModule,
  MatStepperModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatAutocompleteModule, MatCheckboxModule,
  MatRadioModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
