// Head of singly linked list
var head;

// Implementing a singly linked list
class SinglyNode {
    // Constructor
    constructor (val) {
        this.value = val;
        this.next = null;
    }
}

function singlySize() {
    if (head == null) {
        return 0;
    } else {
        // Iterate through the list and keep count
        var h = head;
        var size = 0;
        while (h != null) {
            size++;
            h = h.next;
        }
        return size;
    }
}

function add(head, val) {
    // If the list is empty, just create node and set the head
    if (head == null) {
        head = SinglyNode(val);
    } else {
        // Find the end
        var h = head;
        while (h.next != null) {
            h = h.next;
        }
        // Add the new node
        h.next = SinglyNode(val);
    }
}

function addAt(head, val, index) {
    // Ensure the index is valid
    const size = singlySize();
    if (index < size) {
        // 0 1 2 3, size = 4
        // Find the valid index
        var h = head;
        for (let i = 0; i < size-1; i++) {
            h = h.next;
        }
    } else {
        // Nothing is changed
        return;
    }
}
