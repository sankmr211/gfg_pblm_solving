
// Name: Split Linked List Alternatingly
// link: https://www.geeksforgeeks.org/problems/split-singly-linked-list-alternatingly/1

function createobj(params) {
  function frameobj(arr, index) {
    if (arr[index] != undefined) {
      return { data: arr[index], next: frameobj(arr, index + 1) };
    } else {
      return null;
    }
  }
  let arr = params.split(" ").map((x) => parseInt(x));
  return { data: arr[0], next: frameobj(arr, 1) };
}

class Solution {
  alternatingSplitList(head) {
    // code here
    if (head.next == null) {
      return head;
    }

    function nodealter(node) {
      if (node == null) {
        return null;
      }
      let next_node;

      if (node.next == null) {
        next_node = node.next;
      } else {
        next_node = node.next.next;
      }

      return { data: node.data, next: nodealter(next_node) };
    }

    return [nodealter(head), nodealter(head.next)];
  }
}

let obj = new Solution();
let head = createobj("25 36 96 45 78 41");
console.log(obj.alternatingSplitList(head));
