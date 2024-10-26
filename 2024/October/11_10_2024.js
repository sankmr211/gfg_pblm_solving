
// Name: Reorganize The Array
// link: https://www.geeksforgeeks.org/problems/reorganize-the-array4810/1

function rearrange(arr) {
    const set1 = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if(!set1.has(i)){
            arr[i] = -1
        }else{
            arr[i] = i
        }
    }
    return arr
}

console.log(rearrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]))