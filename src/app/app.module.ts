import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { BoldDirective } from './bold.directive';
import { GithubPipe } from './github.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    BoldDirective,
    GithubPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
