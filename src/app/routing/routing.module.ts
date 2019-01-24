import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';
import { GithubComponent} from '../github/github.component';
import { RepositoryComponent} from '../repository/repository.component';
import { UserComponent} from '../user/user.component';

const routes:Routes=[
  {path:"myprofile", component:GithubComponent},
  {path:"user", component:UserComponent},
  {path:"repository",component:RepositoryComponent},
  {path:"",redirectTo:"/myprofile",pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
