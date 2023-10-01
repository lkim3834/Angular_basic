import { Pipe, PipeTransform } from "@angular/core";
// going to use the syntax of PipeTransform for class TitlePipe
@Pipe({
  name: 'titleCase'
})
export class TitlePipe implements PipeTransform{
  transform(value : string  ){
    let preposition= [
      'of',
      'the'
    ];
    if (value == null) {
      return null;
    }
    var arr = value.split(' ');

    for(var index = 0  ; index < arr.length; index ++){
      let word = arr[index];
      console.log("yes it is");
      if (index != 0 &&  preposition.includes(word.toLowerCase( ))){
        arr[index] =  arr[index].toLowerCase();
      }else {
        arr[index] = arr[index].substring(0,1).toUpperCase() + arr[index].substring(1).toLowerCase();
        //console.log("this" + arr[index].substring(0,1).toUpperCase());
      }

    }

    return arr.join(' ');

  }
}
