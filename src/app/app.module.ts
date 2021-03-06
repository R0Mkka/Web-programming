import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule, MatIconModule, MatSelectModule } from '@angular/material';
import { QuicklinkModule } from 'ngx-quicklink';
import { DndModule } from 'ng2-dnd';

import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { NewFolderDialogComponent } from './modules/journal/components/new-folder-dialog/new-folder-dialog.component';
import {
  EditScheduleItemDialogComponent
} from './modules/schedule/components/edit-schedule-item-dialog/edit-schedule-item-dialog.component';
import {
  NewStudentReviewDialogComponent
} from './modules/student-reviews/components/new-student-review-dialog/new-student-review-dialog.component';
import { NewSubjectDialogComponent } from './modules/subjects/components/new-subject-dialog/new-subject-dialog.component';
import { YesNoDialogComponent } from './shared/yes-no-dialog/yes-no-dialog.component';
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
    MatSelectModule,
    QuicklinkModule,
    DndModule.forRoot(),
    StoreModule,
    AppRoutingModule
  ],
  entryComponents: [
    NewFolderDialogComponent,
    EditScheduleItemDialogComponent,
    NewStudentReviewDialogComponent,
    NewSubjectDialogComponent,
    YesNoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
