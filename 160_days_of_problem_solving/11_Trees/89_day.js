
// Name: Check for BST
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/check-for-bst

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to check whether a Binary Tree is BST or not.
    isBST(root) {
        // your code here
        let curr = root;
        let prevValue = -Infinity; 
    
        while (curr !== null) {
            if (curr.left === null) {
            
                if (curr.data <= prevValue) {
                    return false;
                }
                prevValue = curr.data;
                curr = curr.right;
            } else {
            
                let pre = curr.left;
                while (pre.right !== null && pre.right !== curr) {
                    pre = pre.right;
                }
    
                if (pre.right === null) {
                
                    pre.right = curr;
                    curr = curr.left;
                } else {
                
                    pre.right = null;
    
                    if (curr.data <= prevValue) {
                    
                        return false;
                    }
                    prevValue = curr.data;
                    curr = curr.right;
                }
            }
        }
    
        return true;
    }
}

let obj = new Solution();

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.right.left = new Node(9);
root.right.right = new Node(25);

let ans = obj.isBST(root)
console.log(ans);