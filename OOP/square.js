function Shape(name,sides,sideLength){
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
}
Shape.prototype.calcPerimeter=function(){
    console.log( this.sideLength*this.sides);
}
let square=new Shape("Square",4,5);
square.calcPerimeter();
let triangle=new Shape("Triangle",3,3);
triangle.calcPerimeter();
// Using ES class syntax;
// class Shape{
//     constructor(name,sides,sideLength){
//         this.name=name;
//         this.sides=sides;
//         this.sideLength=sideLength;
//     }
//     calcPerimeter=function(){
//         console.log(this.sideLength*this.sides)
//     }
// }
// let square=new Shape("sides",4,5)
// square.calcPerimeter();
// let triangle=new Shape("triangle",3,3)
// triangle.calcPerimeter();