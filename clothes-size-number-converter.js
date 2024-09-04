/* 
Description
You have clothes international size as text (xs, s, xxl).
Your goal is to return European number size as a number from that size.

Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

Linearity
Base size for medium (m) is 38.
(then, small (s) is 36, and large (l) is 40)

The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.

(For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

Invalid cases
Function should handle wrong/invalid sizes.

Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
Notice that you cannot apply modifier for m size, consider that case as invalid!
Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).

Invalid examples: xxx, sss, xm, other string

Valid Examples
xs: 34
s: 36
m: 38
l: 40
xl: 42
*/

const map = {
  s: 36,
  m: 38,
  l: 40,
};

const sizeToNumber = size => {
  let foundSize;
  for (const s of ["s", "m", "l"]) {
    if (size[size.length - 1] === s) {
      foundSize = s;
      break;
    }
  }

  if (!foundSize) return null;

  const invalidBaseSize = size.match(/[sml]/g).length > 1;

  if (invalidBaseSize) return null;

  const xCount = size.match(/x/g)?.length ?? 0;

  if (foundSize === "m" && xCount > 0) return null;

  return xCount === 0
    ? map[foundSize]
    : foundSize === "s"
    ? map[foundSize] - xCount * 2
    : map[foundSize] + xCount * 2;
};
