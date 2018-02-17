'use strict';

module.exports = exports = {};

const Node = function(data) {
    this.data = data;
    this.next = null;
}

exports.SLL = function() {
    this.size = 0;
    this.head = null;
}

exports.SLL.prototype.add = function(data) {
    let node = new Node(data);
    let currentNode = this.head;
    if (!currentNode) {
        this.head = node;
        this.size++;
        return this;
    }

    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.size++;
    return this;
}

exports.SLL.prototype.nthFromLast = function(pos) {
    if (!this.size) {
        throw new Error('this is an empty list')
        return;
    } 

    if (pos > this.size) {
        throw new Error('the list is smaller than the given position');
        return;
    }

    if (pos === this.size && this.head !== null) {
        return this.head;
    }
    

    let currentNode = this.head;
    let nthFromLast = this.size - pos;
    let count = 0;

    while (currentNode.next) {
        currentNode = currentNode.next;
        count++
        if (count === nthFromLast) break;
    }

    console.log(currentNode)
    return currentNode;
}