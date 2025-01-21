
// Name: Merge two sorted linked lists
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/merge-two-sorted-linked-lists

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
    sortedMerge(head1, head2) {
        // your code here

        if (head1 === null)
            return head2;
        if (head2 === null)
            return head1;

        if (head1.data <= head2.data) {
            head1.next = this.sortedMerge(head1.next, head2);
            return head1;
        }
        else {
            head2.next = this.sortedMerge(head1, head2.next);
            return head2;
        }
    }
}

let obj = new Solution();
const head1 = createobj("5 10 15 40"),head2 = createobj("2 3 20");
let ans = obj.sortedMerge(head1,head2)
console.log(ans);