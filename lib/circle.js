import { shapes } from './shapes'; // Assuming 'shapes.js' is the filename where you exported the classv

class Circle extends Shapes {
    constructor(text, radius, color) {
      super(text, 'circle', color);// not really sure if  this is correct. should 'circle' be something else? 
      this.radius = radius;
    }
}  



//This will eventually be filler and we will pass the results from the prompts in the proper places. I believe they will have to be object literals.
// <!-- <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill="red" />

//   <!-- <circle cx="150" cy="100" r="80" fill="green" /> -->

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg> -->