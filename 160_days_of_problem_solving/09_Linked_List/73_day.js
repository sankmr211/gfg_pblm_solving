
// Name: Remove loop in Linked List
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/remove-loop-in-linked-list

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class Solution {
    // Function to remove a loop in the linked list.
    removeLoop(head) {
        // your code here
        let st = new Set();
        let prev = null;
        while (head != null) {
        
            if (st.has(head)) {
                prev.next = null;
                return;
            }
        
            st.add(head);
            prev = head;
            head = head.next;
        }
    }
}

let obj = new Solution();

head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = head.next;

obj.removeLoop(head);
console.log(head);