import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class LikeComponent {
@Input('likesCount') likesCount;
@Input('isActive') isActive;
@Output('change') change = new EventEmitter();
// function to update the count if it's clicked
onClick(){
  this.likesCount += this.isActive? -1 : 1 ;
  this.isActive = this.isActive? false: true;
  this.change.emit(this.isActive);
}
}
