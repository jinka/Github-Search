import { Component } from '@angular/core';
import {GithubService} from './github.service';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-Search';

constructor() {

}
}
