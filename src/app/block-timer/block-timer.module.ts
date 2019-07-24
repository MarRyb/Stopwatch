import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockTimerComponent } from './block-timer.component';

@NgModule({
  declarations: [BlockTimerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BlockTimerComponent
  ]
})
export class BlockTimerModule { }
