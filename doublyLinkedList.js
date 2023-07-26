// Head of doubly linked list
var head;

// Implementing a doubly linked list
class DoublyNode {
    // Constructor
    constructor (val) {
        this.prev = null;
        this.value = val;
        this.next = null;
    }
}

function doublySize() {
    if (head == null) {
        return 0;
    } else {
        // Iterate through the list and keep count
        var h = doublySize;
        var size = 0;
        while (h != null) {
            size++;
            h = h.next;
        }
        return size;
    }
}