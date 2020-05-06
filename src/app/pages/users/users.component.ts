import { UserserviceService } from '../../service/userservice/userservice.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { FormGroup} from '@angular/forms';
import { UserDeleteModalComponent } from '../modals/users/user-delete-modal/user-delete-modal.component';

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
             private userDeleteModalComponent: UserDeleteModalComponent) {
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

  initiateDismiss(id, entity){
    this.userDeleteModalComponent.open(id, entity);
  }
}
