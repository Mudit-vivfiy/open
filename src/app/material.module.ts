import { NgModule } from "@angular/core";
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports: [
        MatSliderModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class MaterialModule {}