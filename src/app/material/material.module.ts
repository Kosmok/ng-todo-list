import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatMenuModule, MatGridListModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    exports: [MatToolbarModule, MatButtonModule, MatFormFieldModule,
        MatCardModule, MatListModule, FlexLayoutModule, MatInputModule,
        MatGridListModule, MatMenuModule, MatIconModule, MatSidenavModule ]
})
export class MaterialModule {

}