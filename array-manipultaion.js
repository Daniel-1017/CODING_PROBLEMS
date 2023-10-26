const leastLargerGreaterThanN = (arr, N) => {
  let result = Number.POSITIVE_INFINITY

  for (const num of arr) {
    if (num > N && num < result) {
      result = num
    }
  }

  if (result === Number.POSITIVE_INFINITY) {
    return -1
  }

  return result
}

const arrayManip = array => {
  for (let i = 0; i < array.length; i++) {
    const leastLarger = leastLargerGreaterThanN(array.slice(i), array[i])
    array[i] = leastLarger
  }

  return array
}
