import { shapes } from './shapes'; // Assuming 'shapes.js' is the filename where you exported the class

class Square extends shapes {
    constructor(text, sideLength, color) {
      super(text, 'square', color);
      this.sideLength = sideLength;
    }
}


{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Rectangle (Square) -->
  <rect x="50" y="50" width="200" height="200" fill="blue" />

  <!-- Text in the center of the square -->
  <text x="150" y="225" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg> */}


//render() method that returns a string for the corresponding SVG file

//THEN I am shown a 300x200 pixel image that matches the criteria I entered