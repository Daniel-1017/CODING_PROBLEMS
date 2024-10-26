/* 
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const output = [];
    for (const n of nums1.length > nums2.length ? nums2 : nums1) if ((nums1.length > nums2.length ? nums1 : nums2).includes(n)) output.push(n);

    return [...new Set(output)];
};

// SOLUTION OF OTHERS
function intersection(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set();

    for (const n2 of nums2) {
        if (s1.has(n2)) s2.add(n2);
    }

    return Array.from(s2);
}
