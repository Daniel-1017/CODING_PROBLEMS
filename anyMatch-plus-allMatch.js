/* 
Implement two methods anyMatch and allMatch which take the head of a linked list and a predicate function, and return:

anyMatch: whether the predicate is true for any of the list's elements.
allMatch: whether the predicate is true for all of the list's elements.
For example:

Given the list: 1 -> 2 -> 3, and the predicate x => x > 1, anyMatch / any_match should return true (both 2 & 3 are valid for this predicate), and allMatch / all_match should return false (1 is not valid for this predicate)

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.
*/

function anyMatch(head, p) {
    while (head) {
        if (p(head.data)) return true;
        head = head.next;
    }
    return false;
}

function allMatch(head, p) {
    while (head) {
        if (!p(head.data)) return false;
        head = head.next;
    }
    return true;
}