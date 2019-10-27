import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

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
    path: 'student-reviews',
    loadChildren:
      () => import('./modules/student-reviews/student-reviews.module').then(m => m.StudentReviewsModule)
  },
  {
    path: 'help',
    loadChildren:
      () => import('./modules/help/help.module').then(m => m.HelpModule)
  },
  { path: '**', redirectTo: 'subjects' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
