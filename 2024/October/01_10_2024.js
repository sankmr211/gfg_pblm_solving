
// Name: Multiply two linked lists
// link: https://www.geeksforgeeks.org/problems/multiply-two-linked-lists/1

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
 

 let m = 1000000007n
 
 function Nodeform(data,next,total) {
    
    if(total == null){
       total = data.toString()
    }else{
       total =  total + data.toString()
    }
 
    if(next == null){
       return total
    }else{
       return Nodeform(next.data,next.next,total)
    }
 
 }

 let first = createobj("9 9 3 9 7 4") // object frame input
 let second = createobj("7 8 5 3 6 4") // object frame input
 
 let mod1 = BigInt(Nodeform(first.data,first.next,null))
 let mod2 = BigInt(Nodeform(second.data,second.next,null))
 
 console.log(((mod1 * mod2) % m).toString()); // output