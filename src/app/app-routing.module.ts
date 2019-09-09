import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from 'app/components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'subjects',
    loadChildren:
      () => import('./modules/subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'schedule',
    loadChildren:
      () => import('./modules/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'journal',
    loadChildren:
      () => import('./modules/journal/journal.module').then(m => m.JournalModule)
  },
  {
    path: 'supervision',
    loadChildren:
      () => import('./modules/supervision/supervision.module').then(m => m.SupervisionModule)
  },
  {
    path: 'student-reviews',
    loadChildren:
      () => import('./modules/student-reviews/student-reviews.module').then(m => m.StudentReviewsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
