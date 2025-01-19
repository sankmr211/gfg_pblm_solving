
// Name: Rotate a Linked List
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/rotate-a-linked-list

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
    // Function to rotate a linked list.
    rotate(head, k) {
        // your code here
        if (k === 0 || head === null){
            return head;
        }

        let curr = head;
        let len = 1;

        while (curr.next !== null) {
            curr = curr.next;
            len += 1;
        }

        k %= len;

        if (k === 0) {
            curr.next = null;
            return head;
        }
        
        curr.next = head;
        curr = head;
        for (let i = 1; i < k; i++){
            curr = curr.next;
        }

        let newHead = curr.next;
        curr.next = null;
        return newHead;
    }
}

let obj = new Solution();
const str = "10 20 30 40", k = 6;
let data = createobj(str)
let ans = obj.rotate(data, k)
console.log(ans);