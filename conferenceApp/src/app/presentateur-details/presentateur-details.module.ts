import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentateurDetailsPage } from './presentateur-details.page';

const routes: Routes = [
  {
    path: '',
    component: PresentateurDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentateurDetailsPage]
})
export class PresentateurDetailsPageModule {}
