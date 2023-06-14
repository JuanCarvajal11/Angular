import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/layout/home/home.component';
import { ResultComponent } from 'src/app/layout/result/result.component';

import { HomeGuard } from 'src/app/guard/home/home.guard';
import { ResultGuard } from 'src/app/guard/result/result.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [HomeGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/shared/layouts/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '',
    component: ResultComponent,
    canActivate: [ResultGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/shared/layouts/result.module').then(m => m.ResultModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
		pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
