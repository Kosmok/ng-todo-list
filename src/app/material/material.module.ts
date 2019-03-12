import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule,
        MatCardModule, MatListModule, FlexLayoutModule ],
    exports: [MatToolbarModule, MatButtonModule,
        MatCardModule, MatListModule, FlexLayoutModule ]
})
export class MaterialModule {

}