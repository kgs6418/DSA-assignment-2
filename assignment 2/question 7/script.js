function fun(nums) {

   let ascending = true;
   let decendimg = true;

   for (let i = 0; i < nums.length-1; i++) {

   if(nums[i] > nums[i+1]){
    ascending = false;
   }else if(nums[i] < nums[i+1]){
    decendimg = false;
   }
    
   } return ascending  || decendimg
}

const nums = [5,1,9];

console.log(fun(nums))
