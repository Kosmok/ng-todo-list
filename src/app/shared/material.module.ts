import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatMenuModule,
    MatGridListModule, MatSidenavModule, MatDialogModule } from '@angular/material';

@NgModule({
    exports: [MatToolbarModule, MatButtonModule, MatFormFieldModule,
        MatCardModule, MatListModule, MatInputModule, MatDialogModule,
        MatGridListModule, MatMenuModule, MatIconModule, MatSidenavModule ]
})
export class MaterialModule {

}