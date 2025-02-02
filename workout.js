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


// const content = `// Name: 
// // Link: 


// class Solution {

// }

// let obj = new Solution();
// const arr = [];
// let ans = obj;
// console.log(ans);`

// File creation in Node.js
// const fs = require('fs');


// for (let i = 93; i < 181; i++) {
//     const fileName = `${i}_day.js pending`;
//     fs.writeFile(fileName, content, (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//         } else {
//             console.log(`File '${fileName}' has been created successfully!`);
//         }
//     });    
    
// }


// let content = ''

// for (let i = 93; i <= 160; i++) {


//     content += `| ${i} | [To Be Added]  | [Code](TO_BE_ADD/${i}_day.js) |\n`
    
// }
//     fs.writeFile('redme.txt', content, (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//         } else {
//             console.log(`File 'redme.txt' has been created successfully!`);
//         }
//     }); 
