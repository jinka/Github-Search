import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { User } from './user';


@Injectable({providedIn: 'root'})

export class GithubService {
  username:"jinka"
  user:User;
  apiUrl:string;
  apiRoot:string = 'https://api.github.com/users/';
  results:Object[];
  loading:boolean;
  token:'?f9316b65766fb257d920d126e68754f05eeb85ea'

  constructor(private http: HttpClient) { 
    this.user = new User (0,'',0,0,0)
 }

  search(username:string) {
  
    interface ApiResponse{
      login:string;
      public_repos:number;
      followers:number;
      following:number; 
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.apiRoot+username+this.token).toPromise().then(response=>{
        this.user.login=response.login
        this.user.public_repos=response.public_repos
        this.user.followers=response.followers
        this.user.following=response.following

        resolve()
    },
    error=>{reject(error)}
    )
  })
  return promise;
  }
}
