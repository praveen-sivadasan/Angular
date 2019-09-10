import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username  = 'Initial Value';

  isButtonDisabled(): boolean {
    return !this.username || this.username!.trim().length < 1;
  }

  resetUserName() {
    this.username = '';
  }
}
