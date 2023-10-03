import { Component } from '@angular/core';

@Component({
  // would be called from index.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_basic';
  tweet = {
    body: "Here is a body of tweet",
    isLiked : true,
    likesCount: 10
  }
  change(){

  }

}
