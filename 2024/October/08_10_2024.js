
// Name: Largest Pair Sum
// link: https://www.geeksforgeeks.org/problems/pair-sum--120604/1

function pairsum(arr) {
  let largest = 0;
  let second_largest = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      if (second_largest < largest) {
        second_largest = largest;
      }
      largest = arr[index];
    } else if (arr[index] > second_largest && second_largest < largest) {
      second_largest = arr[index];
    }
  }
  return second_largest + largest;
}

console.log(pairsum([12, 34, 10, 35, 6, 40]));
