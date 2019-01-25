import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../github.service';
import {User} from '../user';
import {Profile} from '../profile';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[GithubService]
})
export class UserComponent implements OnInit {
  userName=""
  user:User;
  show=true;
  username=""
  repos=[]

  constructor(private githubService:GithubService) {
    
   }
   DisplayUser(){
    this.githubService.search(this.userName)
    this.user=this.githubService.user
  }
  
  
  ngOnInit() {
    this.githubService.search("jinka");
    this.user=this.githubService.user;
    this.githubService.searchRepos("jinka");
    this.repos=this.githubService.repos
  }

}
