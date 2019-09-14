import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { LeftBarComponent } from 'app/components/left-bar/left-bar.component';
import {
  EditScheduleItemDialogComponent
} from 'app/modules/schedule/components/edit-schedule-item-dialog/edit-schedule-item-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    InlineSVGModule.forRoot({ baseUrl: 'http://localhost:4200/assets/images/' }),
    AppRoutingModule
  ],
  entryComponents: [
    EditScheduleItemDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
