import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-block-timer',
  templateUrl: './block-timer.component.html',
  styleUrls: ['./block-timer.component.sass']
})
export class BlockTimerComponent implements OnInit {

  counter: number;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    clearInterval(this.timerRef);
    console.log(this.running, this.startText, this.counter);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  ngOnInit() {
  }

}
