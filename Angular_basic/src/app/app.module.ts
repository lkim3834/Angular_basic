import { FormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    FavoriteComponent,
    // need to add the pipe using
    TitlePipe,
    LikeComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
