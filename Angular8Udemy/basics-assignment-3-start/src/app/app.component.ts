import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public counter = 0;
  public showInfo = true;
  public logTracker: string[] = [];

  public toggleParagraph(): void {
    this.showInfo = !this.showInfo;
    this.counter ++;
    const message = this.counter + ' - Info toggled at ' + new Date();
    this.logTracker.push(message);
  }

}
