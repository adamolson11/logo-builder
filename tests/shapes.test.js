const  Shapes  = require('../lib/shapes.js');

describe('Shapes Class', () => {
  it('Our shape gets instantiated with the correct color', () => {
    // Arrange
    const text = 'Hello';
    const shape = 'circle';
    const color = 'red';
    const x = <circle cx="150" cy="100" r="80" fill="green" /> ;

    // Act
    const shapeObj = new Shapes(text, shape, color);
   

    // Assert
    expect(shapeObj.render()).toBe(color);
    expect(shapeObj.render()).toBe(x);
  });

  it('Our shape gets instantiated with the correct text', () => {
    // Arrange
    const text = 'Hello';
    const shape = 'circle';
    const color = 'red';

    // Act
    const shapeObj = new Shapes(text, shape, color);

    // Assert
    expect(shapeObj.text).toBe(text);
  });

  it('Our shape gets instantiated with the correct shape', () => {
    // Arrange
    const text = 'Hello';
    const shape = 'circle';
    const color = 'red';

    // Act
    const shapeObj = new Shapes(text, shape, color);

    // Assert
    expect(shapeObj.shape).toBe(shape);
  });
});
