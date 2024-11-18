/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let max = 0;

    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        const n1 = nums[i],
            n2 = nums[i + 1];

        if (n1 < n2) count++;
        else {
            if (count > max) max = count;
            count = 1;
        }
    }

    if (count > max) max = count;

    return max;
};
