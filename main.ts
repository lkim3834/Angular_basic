/* import Point class from point.ts file */ 
import {Point} from './point'
/* 1. code main.ts to open the file 
   2. "tsc main.ts" : to add the javascript file
 */

// do not know the value --> use let

let a : number; 
let b : boolean; 
let c: string; 
let d : any ; 
let e : number[] = [1,2,3];

const ColorRed = 0 ;
enum Color {
    Red= 0 , Green, Blue
};
let backgroundColor = Color.Red; 
console.log(backgroundColor);


let message;
message = 'abc';

// 2. Type Assertion :
// to change the message type from any --> string 
// telling the transcript compiler about the type of a variable so we can access the intellisense
// let endWithC = (<string>message).endsWith('c');

/* 3. Arrow Functions
   => change the version 1 to version 2 in transcript
   In C#, we call this as lambda.   */

// version 1
function log(message){
    console.log(message);
}

// version 2 
let doLog = (message) => console.log(message);

/* 4. Interfaces:
       => simpler way to pass in args 
       version 1 change into version 2 */

// version 1 
let drawPoint = (point: {x: number, y: number}) =>{

}

drawPoint({
    x: 1, 
    y: 2
})

// version 2 
// name of the interface should be capitalized (Pascal)
// interface Point {
//     x: number, 
//     y: number,
    
// }
// let drawPoint2 = (point: Point) =>{

// }



/* point : the object of the class  
In C#, we can have multiple constructors , but in typescript, we cant'
 */
let point = new Point(1,2); 
// x is the property but looks like field in the out
let x = point.x; 
point.x = 2;  
point.draw();

