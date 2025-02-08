
// Name: Tree Boundary Traversal
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/boundary-traversal-of-binary-tree

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    isLeaf(node) {
        return !node.left && !node.right;
    }

    collectBoundaryLeft(root, res) {
        if (!root || this.isLeaf(root)){
             return;
        }
    
        res.push(root.data);
        if (root.left) {
            this.collectBoundaryLeft(root.left, res);
        } else if (root.right) {
            this.collectBoundaryLeft(root.right, res);
        }
    }

    collectLeaves(root, res) {
        if (!root) {
            return;
        }
    
        if (this.isLeaf(root)) {
            res.push(root.data);
            return;
        }
    
        this.collectLeaves(root.left, res);
        this.collectLeaves(root.right, res);
    }

    collectBoundaryRight(root, res) {
        if (!root || this.isLeaf(root)){
            return;  
        } 
    
        if (root.right) {
            this.collectBoundaryRight(root.right, res);
        } else if (root.left) {
            this.collectBoundaryRight(root.left, res);
        }
    
        res.push(root.data);
    }

    boundaryTraversal(root) {
        const res = [];

        if (!root) {
            return res;
        }
    
        if (!this.isLeaf(root)) {
            res.push(root.data);
        }
    
        this.collectBoundaryLeft(root.left, res);
    
        this.collectLeaves(root, res);
    
        this.collectBoundaryRight(root.right, res);
    
        return res;
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
root.right.right = new Node(25);

let ans = obj.boundaryTraversal(root)
console.log(ans);