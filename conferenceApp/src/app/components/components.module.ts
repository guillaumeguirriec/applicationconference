import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    EmptyStateComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [EmptyStateComponent],
})
export class ComponentsModule { }
