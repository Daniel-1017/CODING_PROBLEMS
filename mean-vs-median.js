/* 
Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value

Array will always be valid (odd-length >= 3)
*/

const calcAvg = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length
}

const meanVsMedian = (numbers) => {
  numbers.sort((a, b) => a - b)
  const mean = calcAvg(numbers)
  const median = numbers.length % 2 === 1 ? numbers[Math.floor(numbers.length / 2)] : calcAvg(numbers.slice(numbers.length / 2 + 1, numbers.length / 2 + 3))

  if (mean > median) return 'mean'
  if (mean < median) return 'median'
  return 'same'
}
