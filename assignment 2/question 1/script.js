function fun(array) {
let sum = 0;
 array.sort((a, b) => { return a-b});

 for (let i = 0; i < array.length; i=i+2) {
    sum += array[i];
    
 }
   return sum;
}

let array = [1,4,3,2];
console.log(fun(array));