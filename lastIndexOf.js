/* 
Implement the method lastIndexOf (last_index_of in PHP and Python), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null/None and can hold any type of value.
*/

// MY SOLUTION
function lastIndexOf(head, value) {
  let idx, count = 0
  while(head) {
    if (head.data === value) idx = count
    count++
    head = head.next
  }
  return idx ?? -1
}

// SOLUTION OF OTHERS
function lastIndexOf(head, value) {
  const list = (node) => node ? [node.data, ...list(node.next)] : []
  return list(head).lastIndexOf(value);
}