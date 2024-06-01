/* 
One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!

For example,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/

function rgbToHsv(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [h, s, v];
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function brightest(colors) {
  let colorValue = 0,
    brightestColor;
  for (const color of colors) {
    const { r, g, b } = hexToRgb(color);
    const [_, __, v] = rgbToHsv(r, g, b);
    if (v > colorValue) {
      brightestColor = color;
      colorValue = v;
    }
  }
  return brightestColor;
}
