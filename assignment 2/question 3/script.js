

	
    function fun (nums) {
        let max = 0
        let map = new Map()
        for (let i = 0; i < nums.length; i++){
           if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
           else map.set(nums[i], 1)
        }
        map.forEach((val, key) => {
            if (map.has(key + 1)) max = Math.max(max, val + map.get(key + 1))
        })
        return max
    };


let nums = [1,3,2,2,5,2,3,7];
let n = nums.length;

console.log(fun(nums));



