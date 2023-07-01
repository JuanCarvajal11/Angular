import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaintComponent } from './paint/paint.component';
import { ExcelComponent } from './excel/excel.component';
import { WordComponent } from './word/word.component';
import { PowerpointComponent } from './powerpoint/powerpoint.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';

import {SpreadsheetAllModule} from '@syncfusion/ej2-angular-spreadsheet';
import { NgxDocViewerModule } from 'ngx-doc-viewer';





@NgModule({
  declarations: [
    AppComponent,
    PaintComponent,
    ExcelComponent,
    WordComponent,
    PowerpointComponent,
    LanguagesComponent,
    HomeComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
    SpreadsheetAllModule,
    NgxDocViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
