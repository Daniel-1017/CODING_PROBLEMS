const getSlope = ([x1, y1], [x2, y2]) => {
  if (x1 === x2) return null
  const slope = (y1 - y2) / (x1 - x2)
  return slope
}