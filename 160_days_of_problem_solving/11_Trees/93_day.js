// Name: Lowest Common Ancestor in a BST
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/lowest-common-ancestor-in-a-bst

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    LCA(root, n1, n2) {
        // your code here
        if (root === null){
            return null;
        }

        if (root.data > n1.data && root.data > n2.data){
            return this.LCA(root.left, n1, n2);
        }

        if (root.data < n1.data && root.data < n2.data){
            return this.LCA(root.right, n1, n2);
        }

        return root;
    }
}

let obj = new Solution();

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

const n1 = root.left.left; // Node 4
const n2 = root.left.right.right; // Node 14

let ans = obj.LCA(root, n1, n2);
console.log(ans);