import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { LeftBarComponent } from 'app/components/left-bar/left-bar.component';
import { ScheduleEditDialogComponent } from 'app/modules/schedule/components/schedule-edit-dialog/schedule-edit-dialog.component';

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
    InlineSVGModule,
    AppRoutingModule
  ],
  entryComponents: [
    ScheduleEditDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
