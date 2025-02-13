
// Name: Fixing Two nodes of a BST
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/fixed-two-nodes-of-a-bst

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    swap(a, b) {
        let temp = a.data;
        a.data = b.data;
        b.data = temp;
    }

    correctBSTUtil(root, first, middle, last, prev) {
        if (!root) return;
    
        this.correctBSTUtil(root.left, first, middle, last, prev);
    
        if (prev[0] && root.data < prev[0].data) {
    
            if (!first[0]) {
                first[0] = prev[0];
                middle[0] = root;
            }
            else {
                last[0] = root;
            }
        }
    
        prev[0] = root;
    
        this.correctBSTUtil(root.right, first, middle, last, prev);
    }

    correctBST(root) {
        // your code here
        let first = [null], middle = [null], last = [null], prev = [null];

        this.correctBSTUtil(root, first, middle, last, prev);

        if (first[0] && last[0])
            this.swap(first[0], last[0]);
        else if (first[0] && middle[0])
            this.swap(first[0], middle[0]);
    }
}

let obj = new Solution();

let root = new Node(6);
root.left = new Node(10);
root.right = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.right = new Node(12);
root.right.left = new Node(7);

obj.correctBST(root);

console.log(root);