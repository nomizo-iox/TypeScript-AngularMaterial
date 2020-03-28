import {NgModule} from '@angular/core';
import {MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatIconModule} from '@angular/material';



const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [MaterialComponents]
})
export class MaterialModule {
}
