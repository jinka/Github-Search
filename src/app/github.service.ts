import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { User } from './user';
import {environment} from '../environments/environment';

@Injectable({providedIn: 'root'})

export class GithubService {
  username:"jinka"
  user:User;
  apiUrlUsers:string
  // apiUrlRepos:string='https://api.github.com/users/repos';
  tokenUsers:string
  //  tokenRepos:string="4d2dbf7b8f928da5d3ba907ee30d777e6fec8a87"

  constructor(private http: HttpClient) { 
    this.user = new User (0,"","",0,0,0,"")
  }

  search(username:string) {
  
    interface ApiResponse{
      name:string;
      avatar_url:string;
      followers:number;
      following:number;
      public_repos:number;
      repos_url:string;
      created_at:string;
      picture:string

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrlUsers+username+environment.tokenUsers).toPromise().then(response=>{
        this.user.name=response.name
        this.user.followers=response.followers
        this.user.creationDate=response.created_at
        this.user.picture=response.avatar_url

        resolve()
    },
    error=>{reject(error)}
    )
  })
  return promise;
  }
}
