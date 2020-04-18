import { HttpClientService } from './../../service/http-client.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  //globals
  users: Array<User>;
  totalUsers: Number;
  
  constructor(private httpClientService: HttpClientService) {
   }

  ngOnInit(): void {
    this.retrieveAllUsers();
    this.getAllUsersCount();
  }


  private retrieveAllUsers(){
    this.httpClientService
        .getUsers()
        .subscribe(response => this.users = response);
  }

  private getAllUsersCount(){
    this.httpClientService
        .getTotalUsers()
        .subscribe(response => this.totalUsers = response);
  }

}
