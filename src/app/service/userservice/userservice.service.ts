import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/model/User';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private onlineStoreUrl: String;

  constructor(private httpClient: HttpClient) {
      this.onlineStoreUrl = 'http://localhost:9097/api/v1/users';
   }

   public createUser(user){
    let body = JSON.stringify(user);
    return this.httpClient
               .post<User>(this.onlineStoreUrl + '/add', user);
  }

  public getUsers(){
    return this
            .httpClient
            .get<User[]>(this.onlineStoreUrl + '/get-all-users');
  }

  public getTotalUsers(){
    return this.httpClient
            .get<Number>(this.onlineStoreUrl + '/get-users-count');
  }

  public deleteUser(id){
    return this.httpClient
            .delete(this.onlineStoreUrl + '/delete/'+id);
  }
}
