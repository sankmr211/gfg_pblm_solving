
// Name: Pair Sum in BST
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/find-a-pair-with-given-target-in-bst

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    dfs(root, set, target) {
        if (root === null){
            return false;
        }
    
        if (set.has(target - root.data)){
            return true;
        }
    
        set.add(root.data);
    
        return this.dfs(root.left, set, target) || this.dfs(root.right, set, target);
    }

    findTarget(root, target) {
        // code here
        const set = new Set();
        return this.dfs(root, set, target);
    }
}

let obj = new Solution();

const root = new Node(7);
root.left = new Node(3);
root.right = new Node(8);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.right = new Node(9);

const target = 12;

let ans = obj.findTarget(root, target)
console.log(ans);