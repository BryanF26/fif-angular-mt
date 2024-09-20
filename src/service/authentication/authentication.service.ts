import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'https://dummyjson.com/auth/login';
  private tokenKey = 'authToken';

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  login(username: string, password: string):
    Observable<any> {
      return this.http.post(this.apiUrl, {username, password}).pipe(
        tap((response:any)=>{
          if(response.token){
            localStorage.setItem(this.tokenKey, response.token);
          }
        })
      )
    }
  
  isLoggedIn(): boolean{
    return !!localStorage.getItem(this.tokenKey);
  }

  isLoggedOut(){
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
