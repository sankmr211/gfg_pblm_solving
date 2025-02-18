// Name: K Closest Points to Origin
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/heap-gfg-160/problem/k-closest-points-to-origin--172242


class Solution {

    squaredDis(point) {
        return point[0] * point[0] + point[1] * point[1];
    }

    partition(points, left, right) {
    
        let pivot = points[right];
        let i = left;
    
        for (let j = left; j < right; j++) {
          
            if (this.squaredDis(points[j]) <= this.squaredDis(pivot)) {
                [points[i], points[j]] = [points[j], points[i]];
                i++;
            }
        }
        [points[i], points[right]] = [points[right], points[i]];
        
        return i;
    }

    quickSelect(points, left, right, k) {
        if (left <= right) {
            let pivotIdx = this.partition(points, left, right);
            
            let leftCnt = pivotIdx - left + 1;
          
            if (leftCnt === k){
                return;
            }
            
            if (leftCnt > k){
                this.quickSelect(points, left, pivotIdx - 1, k);
            }else{
                this.quickSelect(points, pivotIdx + 1, right, k - leftCnt);
            } 
        }
    }

    kClosest(points, k) {
        // Your code here
        this.quickSelect(points, 0, points.length - 1, k);
    
        return points.slice(0, k);
    }
}

let obj = new Solution();
const arr = [[1, 3], [-2, 2], [5, -1], [3, 2], [1, 1]], k = 3;;
let ans = obj.kClosest(arr, k);
console.log(ans);