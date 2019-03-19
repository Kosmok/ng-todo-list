import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ConfitmDialogComponent } from './components/confitm-dialog/confitm-dialog.component';

@NgModule({
  declarations: [ConfitmDialogComponent],
  imports:[
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    ConfitmDialogComponent
  ],
})
export class SharedModule { }
