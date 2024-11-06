
// Name: Two Smallests in Every Subarray
// link: https://www.geeksforgeeks.org/problems/maximum-sum-of-smallest-and-second-smallest-in-an-array/1

function pairWithMaxSum(arr) {
    if(arr.length == 1){
        return -1
    }

    let sum = 0
    let i = 0
    while(i+1 < arr.length ){
        if(arr[i] + arr[i + 1] > sum){
            sum = arr[i] + arr[i + 1]
        }
        i++
    }
    
    
    return sum;
}


console.log(pairWithMaxSum([4, 3, 1, 5, 6]))
