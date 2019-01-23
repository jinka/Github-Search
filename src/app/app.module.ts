import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { BoldDirective } from './bold.directive';
import { GithubPipe } from './github.pipe';
import { GithubFormComponent } from './github-form/github-form.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    BoldDirective,
    GithubPipe,
    GithubFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
