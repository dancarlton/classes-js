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

    printDescription() {
      console.log(`I have ${this._balls} exteremly massive _balls`)
    }
  }

  let rectangle = new Rectangle(4, 8, 2)
  console.log(rectangle)
  console.log(rectangle.getArea())

  rectangle.printDescription()
