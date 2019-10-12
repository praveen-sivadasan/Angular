import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  public counterEmitter: EventEmitter<number> = new EventEmitter();

  intervalHandler: number;
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public onStartCounter() {
    this.counter = 0;
    const currentRef = this;
    this.intervalHandler = setInterval( function() {
      currentRef.counterEmitter.emit(++currentRef.counter);
    }, 1000);
  }

  public onStopCounter() {
    clearInterval(this.intervalHandler);
  }

}
