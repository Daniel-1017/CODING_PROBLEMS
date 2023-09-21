/* 
Reverse the array

Built in "reverse" array method is disabled.
*/

const reverse = (arr) => {
  const reversedArr = [];
  for (let i = arr.length - 1; i > -1; i--) reversedArr.push(arr[i]);
  return reversedArr;
};

console.log(reverse([1, 2, 3]));
