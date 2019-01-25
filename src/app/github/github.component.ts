import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../github.service';
import {User} from '../user';
import {Profile} from '../profile';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GithubService]
})
export class GithubComponent implements OnInit {
userName=""
user:User;
repos=[]

DisplayUser(){
  this.githubService.search(this.userName)
  this.user=this.githubService.user

  this.githubService.searchRepos(this.userName);
  this.repos=this.githubService.repos

}

  constructor(private githubService:GithubService) { 
    
  }

  ngOnInit() {
    this.githubService.search("jinka");
    this.user=this.githubService.user;
    this.githubService.searchRepos("jinka");
    this.repos=this.githubService.repos

  }

}
