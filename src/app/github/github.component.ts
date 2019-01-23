import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../github.service';
import {User} from '../user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers:[GithubService]
})
export class GithubComponent implements OnInit {
userName=""
user:User;
show=false
repos=[]

DisplayUser(){
  this.show=true
  this.githubService.search(this.userName)
  this.user=this.githubService.user
}

  constructor(private githubService:GithubService) { }

  ngOnInit() {
    this.githubService.search("jinka");
    this.user=this.githubService.user;
  }

}
