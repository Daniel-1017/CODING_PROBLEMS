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
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }
  pop() {
    if (!this.head) return null;
    const currentTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null;
    }
    this.length--;
    return removedNode;
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
  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return !!this.shift();
    if (idx === this.length - 1) return !!this.pop();

    const removedNode = this.get(idx);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    (beforeNode.next = afterNode), (afterNode.prev = beforeNode);
    (removedNode.next = null), (removedNode.prev = null);
    this.length--;
    return removedNode;
  }
}
