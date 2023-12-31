import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { InterceptorInterceptor } from 'src/app/common/services/interceptor/interceptor.interceptor';

import { ComponentsModule } from 'src/app/shared/components/components.module'
import { HomeComponent } from 'src/app/layout/home/home.component';
import { ResultComponent } from 'src/app/layout/result/result.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ResultComponent],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
    ComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
