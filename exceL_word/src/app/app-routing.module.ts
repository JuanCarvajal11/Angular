import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaintComponent } from './paint/paint.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';
import { WordComponent } from './word/word.component';
import { ExcelComponent } from './excel/excel.component';
import { LanguagesComponent } from './languages/languages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'paint',
    component:PaintComponent
  },
  {
    path:'word',
    component:WordComponent
  },
  {
    path:'powerpoint',
    component:PowerpointComponent
  },
  {
    path:'excel',
    component:ExcelComponent
  },
  {
    path:'languages',
    component:LanguagesComponent
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
