import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';
// import { MyprofileComponent} from '../myprofile/myprofile.component';
import { GithubComponent} from '../github/github.component';
// import { GithubComponent} from '../github/github.component';

const routes:Routes=[
  {path:"myprofile", component:GithubComponent},
  {path:"user", component:GithubComponent},
  // {path:"repository",component:RepositoryComponent},
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
