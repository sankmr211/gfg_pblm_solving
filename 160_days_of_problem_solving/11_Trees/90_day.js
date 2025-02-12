
// Name: k-th Smallest in BST
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/find-k-th-smallest-element-in-bst

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    kthSmallestRecur(root, cnt, k) {
        if (root === null){
             return -1;
        }
        
        let left = this.kthSmallestRecur(root.left, cnt, k);
        
        if (left !== -1){
             return left;
        }
        
        cnt[0]++;
        
        if (cnt[0] === k){
             return root.data;
        }
        
        let right = this.kthSmallestRecur(root.right, cnt, k);
        return right;
    }
    

    kthSmallest(root, k) {
        // code here
        let cnt = [0];
        return this.kthSmallestRecur(root, cnt, k);
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
const k = 3;

let ans = obj.kthSmallest(root, k)
console.log(ans);