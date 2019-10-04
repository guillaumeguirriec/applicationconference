import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./presentateurs/presentateurs.module').then(m => m.PresentateursPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  { path: 'session-details', loadChildren: './session-details/session-details.module#SessionDetailsPageModule' },
  { path: 'presentateur-details', loadChildren: './presentateur-details/presentateur-details.module#PresentateurDetailsPageModule' },
  { path: 'session-notes', loadChildren: './session-notes/session-notes.module#SessionNotesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
