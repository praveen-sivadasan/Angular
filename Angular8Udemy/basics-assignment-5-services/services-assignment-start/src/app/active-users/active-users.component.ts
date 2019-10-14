import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userService: UsersServiceService) {
    this.users = this.userService.activeUsers;
  }

  ngOnInit(): void {
  }

  onSetToInactive(id: number) {
    debugger
    this.userService.userSetToInactive.emit(id);
  }
}
