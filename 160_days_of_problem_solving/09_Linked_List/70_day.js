
// Name: Clone List with Next and Random
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/clone-a-linked-list-with-next-and-random-pointer

function printList(head) {
    let result = "";
    while (head !== null) {
        result += head.data + "(";
        result += head.random ? head.random.data : "null";
        result += ")";

        if (head.next !== null) {
            result += " -> ";
        }
        head = head.next;
    }
    console.log(result);
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.random = null;
    }
}

class Solution {
    cloneLinkedList(head) {
        // code here
        if (head === null) {
            return null;
        }
    
        let curr = head;
        while (curr !== null) {
            let newNode = new Node(curr.data);
            newNode.next = curr.next;
            curr.next = newNode;
            curr = newNode.next;
        }
    
        curr = head;
        while (curr !== null) {
            if (curr.random !== null) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }
    
        curr = head;
        let clonedHead = head.next;
        let clone = clonedHead;
        while (clone.next !== null) {
            curr.next = curr.next.next;
            clone.next = clone.next.next;    
            curr = curr.next;
            clone = clone.next;
        }
        curr.next = null;
        clone.next = null;
    
        return clonedHead;
    }
}

let obj = new Solution();

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.random = head.next.next;
head.next.random = head;
head.next.next.random = head.next.next.next.next;
head.next.next.next.random = head.next.next;
head.next.next.next.next.random = head.next;

let ans = obj.cloneLinkedList(head)
printList(ans);