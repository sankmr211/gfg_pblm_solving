
// Name: Reverse a linked list
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/reverse-a-linked-list

function createobj(params) {
    function frameobj(arr,index){
        if(arr[index] != undefined ){
        return { data: arr[index], next: frameobj(arr, index + 1) } 
        }else{
        return null
        }
    }
    let arr = params.split(' ').map(x => parseInt(x));
    return { data: arr[0] , next: frameobj(arr,1)}
 }

class Solution {
    reverseList(head) {
        // your code here

        let curr = head;
        let prev = null;
        let next;

        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}

let obj = new Solution();
const str = "1 2 3 4 5";
let data = createobj(str)
let ans = obj.reverseList(data)
console.log(ans);