import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupervisionComponent } from './components/supervision/supervision.component';

const routes: Routes = [
  { path: '', component: SupervisionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisionRoutingModule { }
