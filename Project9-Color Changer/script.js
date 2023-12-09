// Get the color input element from the DOM
const colorInput = document.getElementById('colorInput');

// Get the selectedColor element from the DOM
const selectedColor = document.getElementById('selectedColor');

// Get the rgbValue element from the DOM
const rgbValue = document.getElementById('rgbValue');

// Get the current color value selected by the user
const color = colorInput.value;

// Update the text content of the selectedColor element with the chosen color
selectedColor.textContent = color;

// Convert hex to rgb
const hexToRgb = hex => {
  // Parse the hexadecimal color value to a bigint
  const bigint = parseInt(hex.substring(1), 16);

  // Extract the red, green, and blue components using bitwise operations
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGB components as a formatted string
  return `${r}, ${g}, ${b}`;
};

// Use the hexToRgb function to convert the color to its RGB equivalent
const rgb = hexToRgb(color);

// Update the text content of the rgbValue element with the calculated RGB value
rgbValue.textContent = rgb;

  