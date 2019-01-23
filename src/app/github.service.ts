import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { User } from './user';
import {environment} from '../environments/environment';

@Injectable({providedIn: 'root'})

export class GithubService {
  username:"jinka"
  user:User;
  repos=[];
  repositories=[];
  apiUrlUsers:string
  // apiUrlRepos:string='https://api.github.com/users/repos';
  tokenUsers:string
  //  tokenRepos:string="4d2dbf7b8f928da5d3ba907ee30d777e6fec8a87"

  constructor(private http: HttpClient) { 
    this.user = new User ("",0,"","","","","", 0,0,0,"",0,0,"","")
  }


  search(username:string) {
  
    interface ApiResponse{
      login:string
      id:number
      avatar_url:string
      name:string
      company:string
      blog:string
      location:string
      followers:number
      following:number
      gists_url:number
      created_at:string
      public_repos:number 
      public_gists:number
      creationDate:string
      updated_at:string


    }
    let promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>(environment.apiUrlUsers+username+environment.tokenUsers).toPromise().then(response=>{
        this.user.id=response.id
        this.user.name=response.name
        this.user.followers=response.followers
        this.user.creationDate=response.created_at
        this.user.avatar_url=response.avatar_url
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.public_repos=response.public_repos
        this.user.login=response.login
        this.user.location=response.location
        this.user.updated_at=response.updated_at

        resolve()
    },
    error=>{reject(error)}
    )
  })
  return promise;
  }

  searchRepos(username:string) {
  
    interface ApiResponse{
      html_url:string
      name:string
      description:string

    }
    let promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>(environment.apiUrlrepos+username+environment.tokenRepos).toPromise().then(response=>{
          for(let i=0;i<response["length"];i++){
            // let newRepo= new Repository(0,"","","",0,"");
            // newRepo.repoId = i+1;
            // newRepo.repoName = response[i].name;
            // newRepo.description = response[i].description;
            // newRepo.language = response[i].language;
            // newRepo.forks = response[i].forks;
            // newRepo.url = response[i].html_url;
            // this.repos.push(newRepo);          
        this.user.name=response.name

        resolve()
    },
    error=>{reject(error)}
    )
  })
  return promise;
  }

}
