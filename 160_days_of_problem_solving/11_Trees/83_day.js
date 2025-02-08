
// Name: Mirror Tree
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/mirror-tree

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    mirror(root) {
    if (root === null)
        return;

    this.mirror(root.left);
    this.mirror(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    }
}

let obj = new Solution();

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let ans = obj.mirror(root)
console.log(root);