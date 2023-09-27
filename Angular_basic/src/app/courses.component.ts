import { core } from "@angular/compiler";
import {Component} from "@angular/core";

@Component({
  selector : 'courses',
  // data binding string interpolation
  template: '<h2>{{ "Title: " + title }}</h2>'
})
export class CoursesComponent{
  title = "List of courses";
  //


}
