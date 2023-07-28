// Head of singly linked list
var head = null;

// Defintion of a node
class SinglyNode {
    // Constructor
    constructor (val) {
        this.value = val;
        this.next = null;
    }
}

// This function returns the size of the list.
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

// This function prints the values of each node.
function printSinglyList() {
    if (head == null) {
        console.log("null"); 
    } else {
        var n = head;
        var str = "head -> ";
        // As long as the n value is not null, it can print something
        while (n) {
            str = str + String(n.value) + " -> ";
            n = n.next;
        }
        str = str + "null";
        console.log(str);
    }
}

// This funciton accepts a value and adds a new node with that value
// at the front of the list.
function addFront(val) {
    // If the list is empty, just create node and set the head
    if (head == null) {
        head = new SinglyNode(val);
    } else {
        newHead = new SinglyNode(val);
        newHead.next = head;
        head = newHead;
    }
}

// This funciton accepts a value and adds a new node with that value
// at the end of the list.
function addEnd(val) {
    // If the list is empty, just create node and set the head
    if (head == null) {
        head = new SinglyNode(val);
    } else {
        // Find the end
        var h = head;
        while (h.next != null) {
            h = h.next;
        }
        // Add the new node
        h.next = new SinglyNode(val);
    }
}

// This function accepts a value and index. It adds a new node with the value 
// into the list at the specified index.
function addAt(val, index) {
    // Ensure the index is valid
    const size = singlySize();
    if (index >= 0 && index < size && head != null) {
        // If the index is 0, then call the addFront() function
        if (index == 0) {
            addFront(val);
        } else {
            // Find the previous and next nodes of the ith node
            var n = head;
            var prev = null;
            var i = 0;
            while (i != index) {
                prev = n;
                n = n.next;
                i++;
            }
            var newNode = new SinglyNode(val);
            newNode.next = n;
            prev.next = newNode;
        }
    } else {
        // Nothing is changed
        console.log("New node cannot be inserted because of invalid index or list is empty.");
        return;
    }
}
