import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectronicosPage } from './electronicos';

@NgModule({
  declarations: [
    ElectronicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectronicosPage),
  ],
})
export class ElectronicosPageModule {}
