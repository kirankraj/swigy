import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { SearchComponent } from "./search/search.component";
import { SignupComponent } from "./signup/signup.component";
import { ContentsComponent } from "./contents/contents.component";

import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";
import { SocialComponent } from "./social/social.component";
import { FooterComponent } from "./footer/footer.component";
import { ProfileComponent } from './profile/profile.component';
import { HeadernewComponent } from './headernew/headernew.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    SearchComponent,
    SignupComponent,
    ContentsComponent,
    SocialComponent,
    FooterComponent,
    ProfileComponent,
    HeadernewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
