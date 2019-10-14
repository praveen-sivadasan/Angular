import {Component, OnInit} from '@angular/core';
import {UsersServiceService} from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService: UsersServiceService) {
    this.users = this.userService.inactiveUsers;
  }

  ngOnInit(): void {
  }

  onSetToActive(id: number) {
    this.userService.userSetToActive.emit(id);
  }
}
