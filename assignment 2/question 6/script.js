function fun(nums,target) {
    
    for (let i = 0; i < nums.length; i++) {
       if(nums[i] == target){
       return  nums.indexOf(target);
       }
        
    }return -1;
    
  
}

const nums = [-1,0,3,5,9,12]
let target = 9;

console.log(fun(nums,target))