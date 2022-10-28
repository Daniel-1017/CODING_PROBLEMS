class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count, current;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count != idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(idx, val) {
    const result = this.get(idx);
    if (result && result != null) {
      result.val = val;
      return true;
    }
    return false;
  }
}
