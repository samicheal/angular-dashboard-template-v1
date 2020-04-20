import { UserserviceService } from './../../service/userservice.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  userRegistrationForm: FormGroup;
  users: Array<User>;
  totalUsers: Number;
  
  constructor(private userService: UserserviceService) {
   }

  ngOnInit(): void {
    this.retrieveAllUsers();
    this.getAllUsersCount();
  }

  onSubmit(){
    console.log("about to create new user.....");
  }

  private retrieveAllUsers(){
    this.userService
        .getUsers()
        .subscribe(response => this.users = response);
  }

  private getAllUsersCount(){
    this.userService
        .getTotalUsers()
        .subscribe(response => this.totalUsers = response);
  }
}
