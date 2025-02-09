
// Name: Maximum path sum from any node
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/maximum-path-sum-from-any-node

class Node {
    constructor(value) {
        // Constructor to initialize a new node
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to return maximum path sum from any node in a tree.

    maxPathSumUtil(root, res) {

        if (root === null) return 0;
    
        const l = Math.max(0, this.maxPathSumUtil(root.left, res));
        const r = Math.max(0, this.maxPathSumUtil(root.right, res));
    
        res.value = Math.max(res.value, l + r + root.data);
    
        return root.data + Math.max(l, r);
    }

    findMaxSum(root) {
        // your code here
        const res = { value: root.data };

        this.maxPathSumUtil(root, res);
    
        return res.value;
    }
}

let obj = new Solution();

const root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);

let ans = obj.findMaxSum(root)
console.log(ans);