import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from './github-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'github_website';
  constructor(private gitservice:GithubServiceService){}
  ngOnInit(){this.gitservice.getUsersList("Tracymbone").subscribe(data=>{
    console.log(data)
  })}

}
