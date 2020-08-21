import { MaterialModule } from './ui/material.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MaterialModule,
       ],
    exports: [MaterialModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
