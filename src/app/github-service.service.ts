import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,Subject } from 'rxjs';
import { LandingpageComponent } from './landingpage/landingpage.component';

@Injectable({

  providedIn: 'root'
})
export class GithubServiceService {

searchResults =new Subject()
  constructor(private http:HttpClient) { }
nameForUser=""
    getUsersList (nameForUser:String):Observable<any>{
    return this.http.get<any>("https://api.github.com/users/" + nameForUser)
   
}
passResults(results :any):void{
  this.searchResults.next(results)
}
getPastResults():any{
  return this.searchResults.asObservable()
}
}

// getusername(users:string){
//   this.nameForUser = users;
// }
// }
