
// Name: Height of Binary Tree
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/height-of-binary-tree

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    /**
     * @param {Node} node
     * @returns {number}
     */

    height(node) {
        // code here
        if (node === null) {
            return -1;
        }
    
        // compute the height of left and right subtrees
        let lHeight = this.height(node.left);
        let rHeight = this.height(node.right);
    
        return Math.max(lHeight, rHeight) + 1;
    }
}


// Representation of the input tree:
//     12
//    /  \
//   8   18
//  / \
// 5   11
let root = new Node(12);
root.left = new Node(8);
root.right = new Node(18);
root.left.left = new Node(5);
root.left.right = new Node(11);

let obj = new Solution();
let ans = obj.height(root)
console.log(ans);