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
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./pages/sessions/sessions.module').then(m => m.SessionsPageModule)
  },
  {
    path: 'sessions/:id/notes',
    loadChildren: () => import('./pages/session-notes/session-notes.module').then(m => m.SessionNotesPageModule)
  },
  {
    path: 'sessions/:id',
    loadChildren: () => import('./pages/session-details/session-details.module').then(m => m.SessionDetailsPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./pages/presentateurs/presentateurs.module').then(m => m.PresentateursPageModule)
  },
  {
    path: 'presentateurs/:id',
    loadChildren: () => import('./pages/presentateur-details/presentateur-details.module').then(m => m.PresentateurDetailsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
