// //                                       Basic

// class Rectangle {
//     constructor(_width, _height, _balls) {
//       this._width = _width
//       this._height = _height
//       this._balls = _balls
//     }

//     getArea() {
//       return this._width * this._height
//     }

//   }

//   let rectangle = new Rectangle(4, 8, 2)
// //   console.log(rectangle)
// //   console.log(rectangle.getArea())

// //                                 Getters & Setters

// class Square {
//     constructor(width){
//         this._width = width
//         this._height = width
//     }

//     get area () {
//         return this._height * this._width
//     }

//     set area (area) {
//         this._width = Math.sqrt(area)
//         this._height = this._width
//     }
// }

// const square = new Square(4)
// square.area = 25

// console.log(square.area)

// //                                 Static Methods

// class Square {
//   constructor(width) {
//     this._width = width
//     this._height = width
//   }

//   static equals(a, b) {
//     return a._width * a._height === b._width * b._height
//   }
// }

// const square = new Square(8)
// const squaredUpFoo = new Square(8)

// console.log(Square.equals(square, squaredUpFoo))


// //                                 Inheritance & Extends

// Parent & Child Classes

class Person {
  constructor(name, age){
    this._name = name,
    this._age = age
  }

  describe() {
    console.log(`I am ${this._name} and I am ${this._age} years old.`)
  }
}

class Programmer extends Person {

}

 function developSoftware(programmers){
  // Develop software
}
