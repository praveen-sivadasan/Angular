import {EventEmitter, Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService implements OnDestroy {

  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];
  public userSetToInactive = new EventEmitter<number>();
  public userSetToActive = new EventEmitter<number>();

  public subscriptions = [];

  constructor() {
    this.subscriptions.push(
      this.userSetToInactive.subscribe((id) => {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
      })
    );

    this.subscriptions.push(
      this.userSetToActive.subscribe((id) => {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
