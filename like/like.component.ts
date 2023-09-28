
// import { CourseComponent } from './../course/course.component';
// import { Component } from '../Angular_basic/@angular/core;

// @Component({
//   selector: 'app-like',
//   templateUrl: './like.component.html',
//   styleUrls: ['./like.component.css']
// })
export class LikeComponent {

  constructor(private _count?: number, private _likeOn?: boolean){

  }
  onClick(){
    this._count += this._likeOn? 1 : -1;

    this._likeOn = !this._likeOn;

  }
  get likeOn(){
    return this._likeOn;
  }
  set likeOn(value ){
    this._likeOn = value;
  }
  set count(value ){
    this._count = value;
  }
  get count(){
    return this._count;
  }
}
