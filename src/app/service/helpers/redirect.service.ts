import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  constructor(private router: Router) { }

  public refreshComponent(route: String){
    this.router.navigateByUrl('/', {skipLocationChange: true})
                       .then(() => {
                         this.router.navigate([route])
                       })
  }
  
}
