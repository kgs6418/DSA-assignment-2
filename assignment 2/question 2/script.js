function fun(candyType) {

    
let newArr = new Set(candyType);
return newArr.size;

} 

const candyType = [1,1,2,2,3,3,4,4,5,5,6,6]

console.log(fun(candyType))


