
const start = process.hrtime();

function factorial(val,total) {
   let value = val -1
   let sum_val = value * total
   if(value == 1){
     return sum_val 
   }else{
      return factorial(value,sum_val)
   }

}
console.log(factorial(6,6))

const end = process.hrtime(start);

const timeTaken = end[0] + end[1] / 1e9;
console.log(`Execution time: ${timeTaken} seconds`);

