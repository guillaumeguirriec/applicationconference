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
    path: 'sessions/:id/notes',
    loadChildren: () => import('./session-notes/session-notes.module').then(m => m.SessionNotesPageModule)
  },
  {
    path: 'sessions/:id',
    loadChildren: () => import('./session-details/session-details.module').then(m => m.SessionDetailsPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./presentateurs/presentateurs.module').then(m => m.PresentateursPageModule)
  },
  {
    path: 'presentateurs/:id',
    loadChildren: () => import('./presentateur-details/presentateur-details.module').then(m => m.PresentateurDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
