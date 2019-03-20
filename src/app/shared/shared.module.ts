import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { ConfitmDialogComponent } from './components/confitm-dialog/confitm-dialog.component';
import { httpInterceptorProviders } from './interceptors/interceptors';

@NgModule({
  declarations: [ConfitmDialogComponent],
  imports: [
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    ConfitmDialogComponent
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class SharedModule { }
