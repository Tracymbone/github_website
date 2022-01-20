import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
 results:any
  constructor(private SearchuserService:GithubServiceService) { }
  ngOnInit(): void {

    this.SearchuserService.getUsersList("") 
      .subscribe((response: any)=>{
        this.results(response.results)
      })     
    }

//   sendusername(){
//     this.SearchuserService.getusername(this.search.name);
//     this.searchUser();
//   }
//   searchUser(){
//     this.SearchuserService.getusers().subscribe((data) => {
//       this.users = data;
//       console.log(data);
//     console.log("mbone")},
    
//     tracy:any => {
//       console.log(tracy.message)
//     } )
//   }


  }

