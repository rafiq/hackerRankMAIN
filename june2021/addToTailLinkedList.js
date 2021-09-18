class SinglyLinkedListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function insertNodeAtTail(head, data) {

    let newNode = new SinglyLinkedListNode(data);

    if (!head) {
        head = new SinglyLinkedListNode(data)
        return head;
    }

    let curr = head;

    while (curr.next) {
        curr = curr.next
    }
    curr.next = newNode

    return head;
}