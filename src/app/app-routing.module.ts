import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-2',
    loadChildren: () => import('./page-2/page-2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page-3',
    loadChildren: () => import('./page-3/page-3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page-4',
    loadChildren: () => import('./page-4/page-4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'page-5',
    loadChildren: () => import('./page-5/page-5.module').then( m => m.Page5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
