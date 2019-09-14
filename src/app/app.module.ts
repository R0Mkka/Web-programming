import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MatIconModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import {
  EditScheduleItemDialogComponent
} from './modules/schedule/components/edit-schedule-item-dialog/edit-schedule-item-dialog.component';
import {
  NewStudentReviewDialogComponent
} from './modules/student-reviews/components/new-student-review-dialog/new-student-review-dialog.component';

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
    MatIconModule,
    InlineSVGModule.forRoot({ baseUrl: 'http://localhost:4200/assets/images/' }),
    AppRoutingModule
  ],
  entryComponents: [
    EditScheduleItemDialogComponent,
    NewStudentReviewDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
