
// Name: Diameter of a Binary Tree
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/diameter-of-binary-tree

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    
    diameterRecur(root, res) {

        if (root === null)
            return 0;
    
        let lHeight = this.diameterRecur(root.left, res);
        let rHeight = this.diameterRecur(root.right, res);
    
        res.value = Math.max(res.value, lHeight + rHeight);
    
        return 1 + Math.max(lHeight, rHeight);
    }

    diameter(root) {
        let res = { value: 0 };
        this.diameterRecur(root, res);
        return res.value;
    }
}

let root = new Node(5);
root.left = new Node(8);
root.right = new Node(6);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(9);

let obj = new Solution();
let ans = obj.diameter(root)
console.log(ans);