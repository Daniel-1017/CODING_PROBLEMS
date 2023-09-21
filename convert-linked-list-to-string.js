/* 
Task
Create a function stringify which accepts an argument list / $list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data / $data / Data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null / NULL / None / nil / nullptr / null() ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:

new Node(1, new Node(2, new Node(3)))
... its string representation would be:

"1 -> 2 -> 3 -> null"
*/

// MY SOLUTION
function stringify(list) {
  let current = list;
  let result = [];
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  return result.length === 0 ? "null" : result.join` -> ` + ` -> ${null}`;
}

// SOLUTION OF OTHERS
function stringify(list) {
  return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`;
}
