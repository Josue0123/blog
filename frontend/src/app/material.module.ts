import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core'

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule
    ],

    exports: [
        BrowserAnimationsModule,
        MatButtonModule, 
        MatCheckboxModule
    ]
})

export class MaterialModule{}