import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../github.service';
import {User} from '../user';
import {Profile} from '../profile';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName=""
  user:User;
  show=true;
  username=""

  constructor(private githubService:GithubService) {
    this.show=true;
   }
   DisplayUser(){
    this.show=true
    this.githubService.search(this.userName)
    this.user=this.githubService.user
  }
  
  ngOnInit() {
  }

}
