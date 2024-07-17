// Basic

class Rectangle {
    constructor(_width, _height, _balls) {
      this._width = _width
      this._height = _height
      this._balls = _balls
    }

    getArea() {
      return this._width * this._height
    }

  }

  let rectangle = new Rectangle(4, 8, 2)
//   console.log(rectangle)
//   console.log(rectangle.getArea())


//   Getters & Setters

class Square {
    constructor(width){
        this._width = width
        this._height = width
    }

    get area () {
        return this._height * this._width
    }

    set area (area) {
        this._width = Math.sqrt(area)
        this._height = this._width
    }
}

const square = new Square(4)
square.area = 25

console.log(square.area)



//  Static Methods
