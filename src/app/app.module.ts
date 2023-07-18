import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from '../project/project-page/project-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../share/material-module';
import { StopClickPropagationDirective } from '../share/stop-click-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    StopClickPropagationDirective  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
