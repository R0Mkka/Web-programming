import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'subjects' },
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
  { path: '**', redirectTo: 'subjects' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
