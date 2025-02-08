
// Name: Construct Tree from Inorder & Preorder
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/construct-tree-1

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    buildTreeRecur(mp, preorder, preIndex, left, right) {

        if (left > right){
            return null;
        }
    
        const rootVal = preorder[preIndex[0]];
        preIndex[0]++;
    
        const root = new Node(rootVal);
    
        const index = mp[rootVal];
    
        root.left = this.buildTreeRecur(mp, preorder, preIndex, left, index - 1);
        root.right = this.buildTreeRecur(mp, preorder, preIndex, index + 1, right);
    
        return root;
    }

    buildTree(inorder, preorder) {
        // code here
        const mp = {};
        inorder.forEach((val, idx) => {
            mp[val] = idx;
        });
    
        const preIndex = [0];
        return this.buildTreeRecur(mp, preorder, preIndex, 0, inorder.length - 1);
    }
}

let obj = new Solution();
const inorder = [3, 1, 4, 0, 5, 2];
const preorder = [0, 1, 3, 4, 2, 5];
let ans = obj.buildTree(inorder, preorder)
console.log(root);