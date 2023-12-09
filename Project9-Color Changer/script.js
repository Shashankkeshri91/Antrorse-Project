function updateColor() {
    const colorInput = document.getElementById('colorInput');
    const selectedColor = document.getElementById('selectedColor');
    const rgbValue = document.getElementById('rgbValue');
  
    const color = colorInput.value;
    selectedColor.textContent = color;
  
    // Convert hex to rgb
    const hexToRgb = hex => {
      const bigint = parseInt(hex.substring(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    };
  
    const rgb = hexToRgb(color);
    rgbValue.textContent = rgb;
  }
  