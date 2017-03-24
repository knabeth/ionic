import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AdminPage } from '../pages/admin/admin';

import { TabsPage } from '../pages/tabs/tabs';

import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureFieldComponent } from './signature-field/signature-field.component';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdminPage,
    SignatureFieldComponent

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    SignaturePadModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AdminPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}