const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.length) {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    } else {
      this._head = node;
      this._tail = node;
    }

    this.length++;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    var current = this._head,
      count = 0;

    if (this.length !== 0 || index > -1 || index < this.length) {
      while (count < index) {
        current = current.next;
        count++;
      }
      return current.data;
    } else {
      return null;
    }
  }

  insertAt(index, data) {
    var current = this._head,
      count = 0;

    if (this.length) {
      while (count < index) {
        current = current.next;
        count++;
      }
      current.data = data;
    } else {
      const node = new Node();
      node.data = data;
    }

    return this;
  }

  isEmpty() {
    if (this.length) {
      return false
    } else {
      return true;
    }
  }

  clear() {
    const node = new Node();
    this.length = 0;
    this._head = node;
    this._tail = node;
    return this;
  }

  deleteAt(index) {
    var current = this._head,
      count = 0;

    if (index === 0) {
      this._head = current.next;
      current.prev = null;
    } else if (this.length !== 0 || index > -1 || index < this.length) {
      while (count < index) {
        current = current.next;
        count++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    } else {
      return this;
    }

    this.length--;
    return this;
  }

  reverse() {
    var current = this._head;

    while (current != null) {
      var nextNode = current.next;
      current.next = current.prev;
      current = nextNode;
    }

    var temp = this._head;
    this._head = this._tail;
    this._tail = temp;
    return this;
  }

  indexOf(data) {
    var current = this._head,
      count = 0;

    while (count < this.length) {
      if (current.data === data) {
        return count;
      } else {
        current = current.next;
        count++;
      }
    }

    return -1;
  }
}

module.exports = LinkedList;
