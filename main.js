/* 1. code main.ts to open the file
   2. "tsc main.ts" : to add the javascript file
 */
// do not know the value --> use let
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var ColorRed = 0;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
console.log(backgroundColor);
var message;
message = 'abc';
// 2. Type Assertion :
// to change the message type from any --> string 
// telling the transcript compiler about the type of a variable so we can access the intellisense
// let endWithC = (<string>message).endsWith('c');
/* 3. Arrow Functions
   => change the version 1 to version 2 in transcript
   In C#, we call this as lambda.   */
// version 1
function log(message) {
    console.log(message);
}
// version 2 
var doLog = function (message) { return console.log(message); };
/* 4. Interfaces:
       => simpler way to pass in args
       version 1 change into version 2 */
// version 1 
var drawPoint = function (point) {
};
drawPoint({
    x: 1,
    y: 2
});
// version 2 
// name of the interface should be capitalized (Pascal)
// interface Point {
//     x: number, 
//     y: number,
// }
// let drawPoint2 = (point: Point) =>{
// }
/* 5. Class */
var Point = /** @class */ (function () {
    // apply cohesion principle 
    // draw: ()=> void 
    // making the x and y argument optional
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    /* if function is part of the class, we call it as METHOD.  */
    Point.prototype.draw = function () {
        console.log(this.x + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
/* point : the object of the class
In C#, we can have multiple constructors , but in typescript, we cant'
 */
var point = new Point(1, 2);
point.draw();
