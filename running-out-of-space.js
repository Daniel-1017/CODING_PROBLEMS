/* 
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

function spacey(array) {
  return array.map((_, idx) => array.slice(0, idx + 1).join``);
}
