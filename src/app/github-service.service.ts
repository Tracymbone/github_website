import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http:HttpClient) { }
nameForUser="Tracymbone"
   public getUsersList():Observable<boolean>{
    return this.http.get<any>("https://api.github.com/users/" + this.nameForUser)

  }
}
