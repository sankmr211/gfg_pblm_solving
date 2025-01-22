
// Name: Add Number Linked Lists
// Link: https://www.geeksforgeeks.org/batch/gfg-160-problems/track/linked-list-gfg-160/problem/add-two-numbers-represented-by-linked-lists

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

    addTwoLists(num1, num2) {
        // code here
        num1 = this.trimLeadingZeros(num1);
        num2 = this.trimLeadingZeros(num2);

        const len1 = this.countNodes(num1);
        const len2 = this.countNodes(num2);

        if (len1 < len2) {
            return this.addTwoLists(num2, num1);
        }

        let carry = 0;
        num1 = this.reverse(num1);
        num2 = this.reverse(num2);

        let res = num1;

        while (num2 !== null || carry !== 0) {
            num1.data += carry;

            if (num2 !== null) {
                num1.data += num2.data;
                num2 = num2.next;
            }

            carry = Math.floor(num1.data / 10);

            num1.data = num1.data % 10;

            if (num1.next === null && carry !== 0) {
                num1.next = new Node(0);
            }

            num1 = num1.next;
        }

        return this.reverse(res);
    }
    
    reverse(head) {
        let prev = null;
        let curr = head;
        let next;

        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    trimLeadingZeros(head) {
        while (head !== null && head.data === 0) {
            head = head.next;
        }
        return head;
    }

    countNodes(head) {
        let len = 0;
        let curr = head;

        while (curr !== null) {
            len += 1;
            curr = curr.next;
        }
        return len;
    }

}

let obj = new Solution();
const num1 = createobj("4 5"),num2 = createobj("3 4 5");
let ans = obj.addTwoLists(num1, num2)
console.log(ans);