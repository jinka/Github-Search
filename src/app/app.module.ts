import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { BoldDirective } from './bold.directive';
import { GithubPipe } from './github.pipe';
import { GithubFormComponent } from './github-form/github-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    BoldDirective,
    GithubPipe,
    GithubFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
