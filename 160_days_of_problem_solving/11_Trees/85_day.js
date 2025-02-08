
// Name: Inorder Traversal
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/inorder-traversal

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    inOrder(node, result = []) {
        if (node === null) {
            return result;
        }
        
        this.inOrder(node.left, result);
        
        result.push(node.data);
       
        this.inOrder(node.right, result);
        
        return result;
    }
}

let obj = new Solution();

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let ans = obj.inOrder(root)
console.log(ans);