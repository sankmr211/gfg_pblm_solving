
// Name: Find the first node of loop in linked list
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/find-the-first-node-of-loop-in-linked-list--170645

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class Solution {
    findFirstNode(head) {
        // code here

        let st = new Set();
        let currNode = head;

        while (currNode !== null) {

            if (st.has(currNode)) {
                return currNode;
            }

            st.add(currNode);
            currNode = currNode.next;
        }

        return null;
    }
}

let obj = new Solution();

let head = new Node(10);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);
head.next.next.next.next = head;

let ans = obj.findFirstNode(head)
if (ans) {
    console.log(ans.data);
} else {
    console.log(-1);
}