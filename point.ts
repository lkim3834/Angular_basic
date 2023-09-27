/* Class */
// to make it accessible outside of the file, we need to export

export class Point {
    // fields suppose have _ before it 
    constructor(private _x?: number, private _y?: number){
        
    }
    // method : print out the fields
    draw (){
        console.log("X: ", this._x, "Y: ", this._y);
    }
    get x(){
        return this._x; 
    }
    set x(value){
        if (value < 0 )
            throw new Error("less than the 0");
        else 
            this._x = value;
        
    }
}

let point = new Point();
