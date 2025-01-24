
// Name: Detect Loop in linked list
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/detect-loop-in-linked-list

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class Solution {
    detectLoop(head) {
        // your code here
        const st = new Set();
        while (head !== null) {

            if (st.has(head)){
                return true;
            }

            st.add(head);

            head = head.next;
        }
        return false;
    }
}


let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = head.next;

let obj = new Solution();
let ans = obj.detectLoop(head)
console.log(ans)