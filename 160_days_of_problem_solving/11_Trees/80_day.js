
// Name: Level order traversal
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/level-order-traversal

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    levelOrderRec(root, level, res) {
        if (!root) return;
    
        if (res.length <= level) 
            res.push([]);
    
        res[level].push(root.data);
    
        this.levelOrderRec(root.left, level + 1, res);
        this.levelOrderRec(root.right, level + 1, res);
    }

    levelOrder(root) {
        const res = [];
        this.levelOrderRec(root, 0, res);
        return res;
    }
}

let obj = new Solution();

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.right.right = new Node(4);
root.right.right.left = new Node(6);
root.right.right.right = new Node(5);
let ans = obj.levelOrder(root)
console.log(ans);