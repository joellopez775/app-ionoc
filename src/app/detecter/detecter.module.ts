import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetecterPageRoutingModule } from './detecter-routing.module';

import { DetecterPage } from './detecter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    DetecterPageRoutingModule,
    CommonModule
    
    
  ],
  declarations: [DetecterPage]
})
export class DetecterPageModule {}
