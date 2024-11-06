
// Name: Count Linked List Nodes
// link: https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1

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

function getCount(head) {
    // Code here
    let node_data = head;
    let count = 0
    let flag = false
    while(!flag){
        count++
        if(node_data.next == null){
            flag = true
        }
        node_data = node_data.next
    }
    return count
}

let head = createobj("1 2 3 4 5") // object frame input
console.log(getCount(head))
