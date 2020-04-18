import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from 'src/app/model/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private onlineStoreUrl: String;

  constructor(private httpClient: HttpClient) {
      this.onlineStoreUrl = 'http://localhost:9097/api/v1';
   }

   public addUsers(){

  }

  public getUsers(){
    return this
            .httpClient
            .get<User[]>(this.onlineStoreUrl + '/users/get-all-users');
  }

  public getTotalUsers(){
    return this.httpClient
            .get<Number>(this.onlineStoreUrl + '/users/get-users-count');
  }
}
