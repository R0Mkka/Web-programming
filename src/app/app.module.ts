import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { LeftBarComponent } from 'app/components/left-bar/left-bar.component';
import { MainPageComponent } from 'app/components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
