import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlockTimerModule } from './block-timer/block-timer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlockTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
