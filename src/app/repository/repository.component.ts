import { Component, OnInit } from '@angular/core';
import {Profile} from '../profile';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../github.service';
import {User} from '../user';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css'],
  providers:[GithubService]
})
export class RepositoryComponent implements OnInit {
  repoName=""
  repositories:Profile[]=[];
  // repository=[]=[]

  constructor(private githubService:GithubService) {
    
   }
   DisplayRepository(){
     console.log("Heey" + this.repoName)
    this.githubService.searchRepository(this.repoName)
    this.repositories=this.githubService.repositories;
    
  }
    
  ngOnInit() {
    this.githubService.searchRepository("triangleTracker")
    this.repositories=this.githubService.repositories;
  }
}