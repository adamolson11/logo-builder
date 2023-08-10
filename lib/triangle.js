import { shapes } from '../shapes.js'; 

class Triangle extends Shapes {
    constructor(text, sideLength, color) {
      super(text, 'square', color);
      this.sideLength = sideLength;
    }
}