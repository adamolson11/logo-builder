const { Shapes } = require('../lib/shapes.js');

describe('Shapes Class', () => {
  it('Our shape gets instantiated with the correct color', () => {
    // Arrange
    const text = 'Hello';
    const shape = 'circle';
    const color = 'red';

    // Act
    const shapeObj = new Shapes(text, shape, color);

    // Assert
    expect(shapeObj.color).toBe(color);
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
