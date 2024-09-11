import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetecterPage } from './detecter.page';

const routes: Routes = [
  {
    path: '',
    component: DetecterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetecterPageRoutingModule {}
