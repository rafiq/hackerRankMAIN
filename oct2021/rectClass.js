class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    area () {
        return this.w * this.h;
    }
}

class Square extends Rectangle {
    constructor(w) {
        super(w)
    }
    area () {
        return this.w * this.w;
    }
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

let obj1 = new Rectangle(3,4);
let sq = new Square(5);
console.log(
    obj1.area(),
    sq.area(),
)