import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from "@angular/material/core";

@NgModule({
    exports: [
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatChipsModule,
        MatRippleModule
    ]
})
export class MaterialModule { }