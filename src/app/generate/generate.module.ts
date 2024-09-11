import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneratePageRoutingModule } from './generate-routing.module';
import { QrCodeModule } from 'ng-qrcode';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

import { GeneratePage } from './generate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratePageRoutingModule,
    QrCodeModule
  ],
  declarations: [GeneratePage, BarcodeScanningModalComponent]
})
export class GeneratePageModule {}
