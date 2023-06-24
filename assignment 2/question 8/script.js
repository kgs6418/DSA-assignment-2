function fun(nums,k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let score =max-min;

    if (score <= 2*k) return 0;
    return score - 2*k;
}

const nums = [1];
let k = 0;

console.log(fun(nums,k))