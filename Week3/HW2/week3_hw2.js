class Circle{
  constructor(radius){
    this.radius = radius;
  }
  area(){
    console.log(Math.PI * Math.pow(this.radius,2) );
  }
  total_sides(){
    console.log("0");
  }
}

const circle1 = new Circle(5);
circle1.area();
circle1.total_sides();
const circle2 = new Circle(6);
circle2.area();
circle2.total_sides();

class Rectangle{
  constructor(len,width){
    this.len = len;
    this.width = width;
  }
  rectangle_area(){
    console.log(this.len * this.width);
  }
  total_sides(){
    console.log("4");
  }
}

const rectangle1 = new Rectangle(4,2);
rectangle1.rectangle_area();
rectangle1.total_sides();
const rectangle2 = new Rectangle(6,3);
rectangle2.rectangle_area();
rectangle2.total_sides();

class Square{
  constructor(side){
    this.side = side;
  }
  area(){
    console.log(Math.pow(this.side,2));
  }
  total_sides(){
    console.log("4");
  }
}

const square1 = new Square(4);
square1.area();
square1.total_sides();

const square2 = new Square(3);
square2.area();
square2.total_sides();
