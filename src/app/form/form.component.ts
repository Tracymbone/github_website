import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
nameForUser=""
repos:any;
  constructor(private searchResultsService:GithubServiceService) { }
results!:any;
  ngOnInit(): void {

  }
getUser(): void {
  console.log("Tracymbone")
  if(this.nameForUser==="")return;
  this.searchResultsService.getUsersList(this.nameForUser)
  .subscribe((response: any)=>{
    this.searchResultsService.passResults({results:response})
    console.log(response)
    this.results = response
})
}
}
