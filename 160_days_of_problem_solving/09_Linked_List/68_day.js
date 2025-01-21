
// Name: Linked List Group Reverse
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/reverse-a-linked-list-in-groups-of-given-size

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
    reverseKNodes(head, k) {
        let curr = head;
        let prev = null;
        let next = null;
        let count = 0;
    
        while (curr !== null && count < k) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }
    
        return prev;
    }

    reverseKGroup(head, k) {
        if (head === null) {
            return head;
        }
    
        let temp = head;
        let count = 0;
        while (temp !== null && count < k) {
            temp = temp.next;
            count++;
        }
    
        let groupHead = this.reverseKNodes(head, k);
        
        head.next = this.reverseKGroup(temp, k);
    
        return groupHead;
    }
}

let obj = new Solution();
const head = createobj("1 2 3 4 5 6 7 8"), k = 4;
let ans = obj.reverseKGroup(head,k)
console.log(JSON.stringify(ans));