import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IteminfoPage } from './iteminfo.page';

const routes: Routes = [
  {
    path: '',
    component: IteminfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IteminfoPageRoutingModule {}
