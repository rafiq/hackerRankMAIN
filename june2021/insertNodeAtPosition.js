class SinglyLinkedListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


function insertNodeAtPosition(llist, data, position) {
    var parent = null;
    var current = llist;
    var index = 0;

    while (current && index < position) {
        parent = current;
        current = current.next;
        index++;
    }

    if (current) {
        var child = new Node(current.data);
        child.next = current.next;

        current.data = data;
        current.next = child;
    }
    else if (parent) {
        parent.next = new Node(data);
    }
    else {
        llist = new Node(data);
    }

    return llist;
    // let newNode = new SinglyLinkedListNode(data);
    // let currPosition = 0;
    // let curr = llist;
    // let prev = null;

    // if (llist === null) {
    //     head = newNode;
    //     return head;
    // }
    // if (position === 0) {

    //     newNode.next = curr;
    //     return llist;
    // }

    // while(currPosition !== position - 1) {
    //     prev = curr;
    //     curr = curr.next;
    //     currPosition++
    // }

    // if (prev) {
    //     prev.next = newNode;
    //     newNode.next = curr
    //     return head;
    // }
}
