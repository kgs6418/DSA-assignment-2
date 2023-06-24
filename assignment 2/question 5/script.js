function fun(nums) {

    nums.sort((a, b) => b-a) // Sorting the array in decending order. i.e = [10,9,8,7,6,5,4,3,2,1]
    let product = 1;
    
for (let i = 0; i <= 2; i++) {
   product = product* nums[i];
    
}
return product;
   
}
const nums = [1,3,5,7,9,2,4,6,8,10];

console.log(fun(nums))