// Name: Serialize and deserialize a binary tree
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/serialize-and-deserialize-a-binary-tree

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    serializePreOrder(root, arr) {
    
        if (root === null) {
            arr.push(-1);
            return;
        }
        
        arr.push(root.data);
        
        this.serializePreOrder(root.left, arr);
        this.serializePreOrder(root.right, arr);
    }

    // Function to serialize a tree and return a list containing nodes of tree.
    serialize(root) {
        // your code here
        const arr = [];
        this.serializePreOrder(root, arr);
        return arr;
    }

    deserializePreOrder(i, arr) {
    
        if (arr[i[0]] === -1) {
            i[0]++;
            return null;
        }
        
        const root = new Node(arr[i[0]]);
        i[0]++;
        
        root.left = this.deserializePreOrder(i, arr);
        root.right = this.deserializePreOrder(i, arr);
        
        return root;
    }    

    // Function to deserialize a list and construct the tree
    deSerialize(arr) {
        // your code here
        const i = [0];
        return this.deserializePreOrder(i, arr);
    }
}

let obj = new Solution();

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(60);


const arr = obj.serialize(root);
const res = obj.deSerialize(arr);

console.log(res);