
// Name: Delete Alternate Nodes
// link: https://www.geeksforgeeks.org/problems/pair-sum--120604/1

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

function deleteAlt(head) {
    let current = head;
    while (current !== null && current.next !== null) {
        current.next = current.next.next;
        current = current.next;
    }
}

let head = createobj("1 2 3") // object frame input
deleteAlt(head)
console.log(head)
