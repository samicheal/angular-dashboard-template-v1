import { NotificationService } from './../../service/notification/notification.service';
import { UserserviceService } from '../../service/userservice/userservice.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  userRegistrationForm: FormGroup;
  users: Array<User>;
  totalUsers: Number;
  
  constructor(private userService: UserserviceService,
             private notificationService: NotificationService) {
   }

  ngOnInit(): void {
    this.retrieveAllUsers();
    this.getAllUsersCount();
  }

  public retrieveAllUsers(){
    this.userService
        .getUsers()
        .subscribe(response => this.users = response);
  }

  public getAllUsersCount(){
    this.userService
        .getTotalUsers()
        .subscribe(response => this.totalUsers = response);
  }
}
