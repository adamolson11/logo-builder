exports.generateSVG = function({ text, textColor, shape, shapeColor }) {
  const svgContent = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shape} 
      fill="${shapeColor}">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
        ${text}</text>
      </${shape}>
    </svg>
  `;
  return svgContent;
};
