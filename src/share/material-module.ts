import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    exports: [
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatChipsModule
    ]
})
export class MaterialModule { }