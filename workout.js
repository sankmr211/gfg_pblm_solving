// here the workout

let arr = [3,6,4,5,0]

let small = arr[0]
let second_small = arr[1]

for (let index = 0; index < arr.length; index++) {
    if(arr[index] < small){
        if(small > arr[index]){
            second_small = small
        }
        small = arr[index]
    }else if(arr[index] < second_small && second_small > small){
        second_small = arr[index]
    }
}

console.log(small,second_small);