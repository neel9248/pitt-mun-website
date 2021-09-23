import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';
import { HighschoolConferenceComponent } from './highschool-conference/highschool-conference.component';
import { CollegeConferenceComponent } from './college-conference/college-conference.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomescreenComponent } from './homescreen/homescreen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MembersComponent,
    HighschoolConferenceComponent,
    CollegeConferenceComponent,
    GalleryComponent,
    ContactUsComponent,
    HomescreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
