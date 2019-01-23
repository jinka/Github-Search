import { Component, OnInit , Output ,EventEmitter} from '@angular/core';
import { GithubService} from '../github.service';
import { User } from '../user';


@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  providers:[GithubService],
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  userName="";
  user:User;
  show = false;

  @Output() addUser=new EventEmitter<User>();

  constructor(private githubService:GithubService) { }

 DisplayUser(){
  //  this.show=false
  //  this.githubService.search(this.userName)
  //  this.user=this.githubService.user
 }


  ngOnInit() {
  }

}
