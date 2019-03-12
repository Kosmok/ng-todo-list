import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatFormFieldModule,
        MatCardModule, MatListModule, FlexLayoutModule, MatInputModule ],
    exports: [MatToolbarModule, MatButtonModule, MatFormFieldModule,
        MatCardModule, MatListModule, FlexLayoutModule, MatInputModule ]
})
export class MaterialModule {

}