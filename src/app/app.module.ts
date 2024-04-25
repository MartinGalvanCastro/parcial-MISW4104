import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DatePipe } from '@angular/common';
import {CafeModule} from "./cafe";

@NgModule({
  declarations: [AppComponent],
  providers: [provideClientHydration(), provideAnimationsAsync(), DatePipe],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafeModule,
    HttpClientModule,
  ],
})
export class AppModule { }
