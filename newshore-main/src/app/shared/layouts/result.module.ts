import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ResultRoutes } from 'src/app/routers/result.routing';

import { ResultComponent } from 'src/app/pages/result/result.component';

@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ResultRoutes),
    FormsModule
  ],
  exports: []
})
export class ResultModule { }
