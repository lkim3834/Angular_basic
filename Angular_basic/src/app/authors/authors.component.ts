import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  // elementor that's used to include selector.
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  // fields
  title = "Authors";
  authors;
  // create the constructor passing the dependency injection
  constructor(authorService: AuthorsService){
    this.authors = authorService.getAuthor();

  }
}
