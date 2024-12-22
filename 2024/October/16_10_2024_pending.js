
// Name: Two Swaps
// link: https://www.geeksforgeeks.org/problems/two-swaps--155623/1

class Solution {
    checkSorted(arr) {
      // code here
      let checksort = this.sortcheck(arr);
      console.log(arr,"before");
      if (checksort) {
        return checksort;
      } else {
        for (let i = 0; i < arr.length / 2; i++) {
          let temp = arr[i];
          arr[i] = arr[arr.length - (i + 1)];
          arr[arr.length - (i + 1)] = temp;
        }
      }
      console.log(arr,"after");
      checksort = this.sortcheck(arr);
      return checksort;
    }
  
    sortcheck(arr) {
      let checksort = false;
      let sort_index = 0;
      while (sort_index < arr.length - 1) {
        if (arr[sort_index] < arr[sort_index + 1]) {
          checksort = true;
          sort_index++;
        } else {
          checksort = false;
          break;
        }
      }
      return checksort;
    }
  }
  
  let obj = new Solution();
  // let arr = [4, 3, 1, 2];
  let arr = [3, 1, 2, 4];
  console.log(obj.checkSorted(arr));