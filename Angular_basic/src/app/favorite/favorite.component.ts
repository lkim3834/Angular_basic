import { Component, OnInit } from '@angular/core';
// add clickable icon and input for the title
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  title : string;
  //ele = document.getElementById("inputMessage") as HTMLParagraphElement;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
  getTitle(){
    console.log(this.title);
    //this.ele.textContent = this.title;

  }
}
