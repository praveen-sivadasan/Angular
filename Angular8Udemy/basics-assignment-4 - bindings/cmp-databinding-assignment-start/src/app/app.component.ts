import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public counterValues: number[] = [];

  public counterEmitter($event) {
    this.counterValues.push($event);
  }
}
