import { Injectable } from '@angular/core';
import {HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { User } from './user';
import {Profile} from './profile';
import {environment} from '../environments/environment';

@Injectable({providedIn: 'root'})

export class GithubService {
  username:"jinka"
  user:User;
  reepo:Profile;
  repos=[];
  repositories=[];
  apiUrlUsers:string
  tokenUsers:string

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
      repo_Full_Name:string

    }
    let promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>(environment.apiUrlrepos+username+environment.tokenRepos).toPromise().then(response=>{
          for(let cnt=0;cnt<response["length"];cnt++){
            let newRepo= new Profile("",0,"",0,"","");
            newRepo.id = cnt+1;
            newRepo.name = response[cnt].name;
            newRepo.description = response[cnt].description;
            newRepo.repos_Url = response[cnt].html_url;
            
            this.repos.push(newRepo);
          }          

        resolve()
    },
    error=>{reject(error)}
    )
  })
  return promise;
  }
// ---
searchRepository(reponame:string) {
  
  interface ApiResponse{
    name:string
    items;
    description:string

  }
  let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiUrlRepository+reponame+environment.tokenRepository).toPromise().then(response=>{
        for(let cnt=0;cnt<response.items["length"];cnt++){
          let newRepo= new Profile("",0,"",0,"","");
          newRepo.id = cnt+1;
          newRepo.name = response.items[cnt].name;
          console.log("service " +response.items[cnt].name)
          console.log("descr " +response.items[cnt].description)
          console.log("full name " +response.items[cnt].repo_Full_Name)
          console.log("html Url " +response.items[cnt].html_url)
          newRepo.description = response.items[cnt].description;
          
          
          this.repos.push(newRepo);
        }          

      resolve()
  },
  error=>{reject(error)}
  )
})
return promise;
}
}
