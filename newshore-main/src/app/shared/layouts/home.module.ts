import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeRoutes } from 'src/app/routers/home.routing';

import { FindFlightsComponent } from 'src/app/pages/find-flights/find-flights.component';

@NgModule({
  declarations: [FindFlightsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule
  ],
  exports: []
})
export class HomeModule { }
