import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import html2canvas from 'html2canvas';
import { BarcodeScanner, LensFacing } from '@capacitor-mlkit/barcode-scanning';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.page.html',
  styleUrls: ['./generate.page.scss'],
})
export class GeneratePage implements OnInit {
  segment = 'generate';
  qrText = "";
  scanResult = '';

  constructor(
    private loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private navCtrl: NavController,
    private router: Router  // Añadido para la navegación
  ) {}

  ngOnInit() {
    if (this.platform.is('capacitor')) {
      BarcodeScanner.isSupported().then(supported => {
        if (supported) {
          BarcodeScanner.checkPermissions().then();
          BarcodeScanner.removeAllListeners();
        }
      }).catch(error => console.error('Error checking BarcodeScanner support:', error));
    }
  }

  async startScan() {
    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: "barcode-scanning-modal",
      showBackdrop: false,
      componentProps: {
        formats: [], // Define formats if needed
        LensFacing: LensFacing.Back
      }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.scanResult = data?.barcode?.displayValue || '';
    }
  }

  captureScreen() {
    const element = document.getElementById('qrImage') as HTMLElement;

    html2canvas(element).then((canvas: HTMLCanvasElement) => {
      this.downloadImage(canvas);
      if (this.platform.is('capacitor')) {
        this.shareImage(canvas);
      } else {
        this.downloadImage(canvas);
      }
    }).catch(error => console.error('Error capturing screen:', error));
  }

  downloadImage(canvas: HTMLCanvasElement) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr.png';
    link.click();
  }

  async shareImage(canvas: HTMLCanvasElement) {
    const base64 = canvas.toDataURL();
    const path = 'qr.png';

    const loading = await this.loadingController.create({
      spinner: 'crescent'
    });

    await loading.present();

    try {
      const res = await Filesystem.writeFile({
        path,
        data: base64,
        directory: Directory.Cache
      });

      const uri = res.uri;

      await Share.share({
        url: uri
      });

      await Filesystem.deleteFile({
        path,
        directory: Directory.Cache
      });
    } catch (error) {
      console.error('Error sharing image:', error);
    } finally {
      loading.dismiss();
    }
  }

  goBack() {
    this.router.navigate(['../detecter']); // Navegar hacia la página anterior
  }
}