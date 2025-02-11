
// Name: K Sum Paths
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/tree-gfg-160/problem/k-sum-paths

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {

    sumK(node, k, currSum = 0, prefSums = {}) {
        if (node === null) return 0;

        let pathCount = 0;
        currSum += node.data;

        if (currSum === k) pathCount++;

        pathCount += prefSums[currSum - k] || 0;

        prefSums[currSum] = (prefSums[currSum] || 0) + 1;

        pathCount += this.sumK(node.left, k, currSum, prefSums);
        pathCount += this.sumK(node.right, k, currSum, prefSums);

        prefSums[currSum]--;

        return pathCount;
    }
}

let obj = new Solution();

const root = new Node(8);
root.left = new Node(4);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(2);
root.right.right = new Node(2);
root.left.left.left = new Node(3);
root.left.left.right = new Node(-2);
root.left.right.right = new Node(1);

const k = 7;

let ans = obj.sumK(root, k)
console.log(ans);