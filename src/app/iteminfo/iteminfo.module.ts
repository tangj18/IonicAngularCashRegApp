import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IteminfoPageRoutingModule } from './iteminfo-routing.module';

import { IteminfoPage } from './iteminfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IteminfoPageRoutingModule
  ],
  declarations: [IteminfoPage]
})
export class IteminfoPageModule {}
