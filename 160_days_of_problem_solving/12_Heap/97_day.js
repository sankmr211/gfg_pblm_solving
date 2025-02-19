// Name: Merge K sorted linked lists
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/heap-gfg-160/problem/merge-k-sorted-linked-lists

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

class Solution {
    // Function to merge K sorted linked list.

    mergeTwo(head1, head2) {

        let dummy = new Node(-1);
        let curr = dummy;
    
        while (head1 !== null && head2 !== null) {
    
            if (head1.data <= head2.data) {
                curr.next = head1;
                head1 = head1.next;
            } else {
                curr.next = head2;
                head2 = head2.next;
            }
            curr = curr.next;
        }
    
        if (head1 !== null) {
            curr.next = head1;
        } else {
            curr.next = head2;
        }
    
        return dummy.next;
    }

    mergeListsRecur(i, j, arr) {

        if (i === j){
             return arr[i];
        }
    
        let mid = i + Math.floor((j - i) / 2);
        let head1 = this.mergeListsRecur(i, mid, arr);
        let head2 = this.mergeListsRecur(mid + 1, j, arr);
    
        return this.mergeTwo(head1, head2);
    }

    mergeKLists(arr) {
        // your code here
        if (arr.length === 0) return null;
        return this.mergeListsRecur(0, arr.length - 1, arr);
    }
}

let obj = new Solution();

let arr = [];

arr[0] = new Node(1);
arr[0].next = new Node(3);
arr[0].next.next = new Node(5);
arr[0].next.next.next = new Node(7);

arr[1] = new Node(2);
arr[1].next = new Node(4);
arr[1].next.next = new Node(6);
arr[1].next.next.next = new Node(8);

arr[2] = new Node(0);
arr[2].next = new Node(9);
arr[2].next.next = new Node(10);
arr[2].next.next.next = new Node(11);

let ans = obj.mergeKLists(arr);
console.log(ans);